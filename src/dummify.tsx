import * as React from 'react';

import { AnyComponent, Pendable } from './utils';

// Can be either an object of data or a function returning an object of data
type DummyData<T> = T | ((props: T) => any);
// define if the data are still loading or not
type Predicate = <T>(props: T) => boolean;

export const dummify = <TProps extends Object>(
  dummyData: DummyData<TProps>,
  predicate: Predicate
) => (WrappedComponent: AnyComponent<TProps, any>): React.ComponentClass<TProps> => (
  class ExportedComponent extends React.Component<TProps, void> {

    static childContextTypes = {
      isPending: React.PropTypes.bool
    };

    getChildContext(): Pendable {
       return {
          isPending: predicate(this.props),
        };
    }

    render() {
      const { props } = this;

      // Append dummy data only if the condition defined by the predicate are met, by default if there is no predicate,
      // append the data.
      if (predicate ? predicate(props) : true) {
        // Either call the dummyData as a function or assign dummyData to data
        const data = typeof dummyData === 'function' ? dummyData(props) : dummyData;

        return <WrappedComponent {...props} {...data}/>;
      }

      return <WrappedComponent {...props} />;
    };
  }
);
