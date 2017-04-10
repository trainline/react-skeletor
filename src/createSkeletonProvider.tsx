import * as React from 'react';

import { AnyComponent, Styling, contextTypes } from './utils';

// Can be either an object of data or a function returning an object of data
type DummyData<T> = T | ((props: T) => any); // tslint:disable-line
// define if the data are still loading or not
type Predicate = <T>(props: T) => boolean;

export const createSkeletonProvider = <TProps extends Object>(
  dummyData: DummyData<TProps>,
  predicate: Predicate,
  styling?: Styling,
) => (
  WrappedComponent: AnyComponent<TProps, any> // tslint:disable-line
): React.ComponentClass<TProps> => (
  class ExportedComponent extends React.Component<TProps, void> {

    static childContextTypes = contextTypes;

    getChildContext = () => ({
      skeletor: {
        isPending: predicate(this.props),
        styling: styling,
      },
    })

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
