import * as React from 'react';

import { AnyComponent, Styling, contextTypes } from './utils';

export type DummyFn<TProps> = (props: TProps) => TProps;
export type DummyData<TProps> = TProps | DummyFn<TProps>;

export function createSkeletonProvider<TPendingProps, TProps extends TPendingProps = TPendingProps>(
  dummyData: DummyData<TPendingProps>,
  predicate: (props: TPendingProps) => boolean,
  styling?: Styling,
) {
  return function(WrappedComponent: AnyComponent<TProps, void>): React.ComponentClass<TPendingProps> {

    class ExportedComponent extends React.Component<TPendingProps, void> {

      static childContextTypes = contextTypes;

      getChildContext = () => ({
        skeletor: {
          isPending: predicate(this.props),
          styling: styling,
        },
      })

      render() {
        const { props } = this;

        // Append dummy data only if the condition defined by the predicate are met,
        // by default if there is no predicate, append the data.
        if (predicate ? predicate(props) : true) {
          // Either call the dummyData as a function or assign dummyData to data
          const data = typeof dummyData === 'function' ? dummyData(props) : dummyData;

          // TODO: fix with typescript 2.4
          return React.createElement(
            WrappedComponent as React.ComponentClass<TProps>,
            Object.assign({}, props, data) as TProps
          );
        }

        // TODO: fix with typescript 2.4
        return React.createElement(
          WrappedComponent  as React.ComponentClass<TProps>,
          props as TProps
        );
      }
    }


    return ExportedComponent;
  };
}
