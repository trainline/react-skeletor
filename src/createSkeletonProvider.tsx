/*
* Copyright (c) Trainline Limited, 2017. All rights reserved.
* See LICENSE.txt in the project root for license information.
*/
import * as React from 'react';
import { contextTypes } from './utils';

export type DummyFn<TProps> = (props: TProps) => TProps;
export type DummyData<TProps> = TProps | DummyFn<TProps>;

export function createSkeletonProvider<TPendingProps, TProps extends TPendingProps = TPendingProps>(
  dummyData: DummyData<TPendingProps>,
  predicate: (props: TPendingProps) => boolean,
  styling?: React.CSSProperties | string,
) {
  return function(
    // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:no-any
    WrappedComponent: React.ClassType<TProps, any, any> | React.SFC<TProps>
  // tslint:disable-next-line:no-any
  ): React.ClassType<TProps, any, any> {

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
            WrappedComponent,
            Object.assign({}, props, data) as TProps
          );
        }

        // TODO: fix with typescript 2.4
        return React.createElement(
          WrappedComponent,
          props as TProps
        );
      }
    }

    return ExportedComponent;
  };
}
