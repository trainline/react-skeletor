import * as React from 'react';

import { AnyComponent, Pendable } from './utils';

export const pendify = <TProps extends Object>(WrappedComponent: AnyComponent<TProps & Pendable, any>) => {

  const ExportedComponent: React.StatelessComponent<TProps> = (props, context) => (
    <WrappedComponent {...props} isPending={context.isPending} />
  );

  ExportedComponent.contextTypes = {
    isPending: React.PropTypes.bool,
  };

  return ExportedComponent;
};
