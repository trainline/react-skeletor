import * as React from 'react';

import { AnyComponent } from './utils';

export const pendify = <U extends Object>() => (WrappedComponent: AnyComponent<U, any>) => (props: U) => {
  // TODO Pull isPending from context
  return <WrappedComponent {...props} />;
};
