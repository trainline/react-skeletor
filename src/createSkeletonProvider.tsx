/*
* Copyright (c) Trainline Limited, 2017. All rights reserved.
* See LICENSE.txt in the project root for license information.
*/
import * as React from 'react';
import { contextTypes, Styling } from './utils';

export function createSkeletonProvider<U>(
  dummyData: Partial<U> | ((props: Partial<U>) => Partial<U>),
  predicate: (props: Partial<U>) => boolean,
  styling?: Styling
) {
  return function<T extends Partial<U>>(
    WrappedComponent: React.SFC<T>
  ): React.ComponentClass<T> {
    class ExportedComponent extends React.Component<T> {
      static childContextTypes = contextTypes;

      getChildContext = () => ({ skeletor: { isPending: predicate(this.props), styling: styling } });

      render() {
        // Append dummy data only if the condition defined by the predicate are met,
        // by default if there is no predicate, append the data.
        if (predicate ? predicate(this.props) : true) {
          // Either call the dummyData as a function or assign dummyData to data
          const data = typeof dummyData === 'function' ? dummyData(this.props) : dummyData;

          return <WrappedComponent {...this.props} {...data} />;
        }

        return <WrappedComponent {...this.props} />;
      }
    }

    return ExportedComponent;
  };
}
