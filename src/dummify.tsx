import * as React from 'react';
import { AnyComponent } from './utils';

// Can be either an object of data or a function returning an object of data
type DummyData<T> = T | ((props: T) => any);
// define if the data are still loading or not
type Predicate = <T>(props: T) => boolean;

export const dummify = <U extends Object>(
  dummyData: DummyData<U>,
  predicate: Predicate
) => (WrappedComponent: AnyComponent<U, any>) => (props: U) => {
  // Append dummy data only if the condition defined by the predicate are met, by default if there is no predicate,
  // append the data.
  if (predicate ? predicate(props) : true) {
    // Either call the dummyData as a function or assign dummyData to data
    const data = typeof dummyData === 'function' ? dummyData(props) : dummyData;

    return <WrappedComponent {...props} {...data}/>;
  }

  return <WrappedComponent {...props} />;
};

