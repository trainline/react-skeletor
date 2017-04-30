import * as React from 'react';

import { AnyComponent, Styling, contextTypes } from './utils';

export type DummyFn<TProps> = (props: TProps) => TProps;
export type DummyData<TProps> = TProps | DummyFn<TProps>;

export function createSkeletonProvider<TProps>(
  dummyData: DummyData<TProps>,
  predicate: (props: TProps) => boolean,
  styling?: Styling,
) {
  return function(WrappedComponent: AnyComponent<TProps, any>): React.ComponentClass<TProps> { // tslint:disable-line

    class ExportedComponent extends React.Component<TProps, void> {

      static childContextTypes = contextTypes;

      getChildContext = () => ({
        skeletor: {
          isPending: predicate(this.props as TProps),
          styling: styling,
        },
      })

      render() {
        const { props } = this;

        // Append dummy data only if the condition defined by the predicate are met,
        // by default if there is no predicate, append the data.
        if (predicate ? predicate(props as TProps) : true) {
          // Either call the dummyData as a function or assign dummyData to data
          const data = typeof dummyData === 'function' ? dummyData(props as TProps) : dummyData;

          return <WrappedComponent {...props} {...data}/>;
        }

        return <WrappedComponent {...props} />;
      };
    }


    return ExportedComponent;
  };
}
