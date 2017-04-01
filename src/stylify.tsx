import * as React from 'react';

import { AnyComponent } from './utils';

export const stylify = <TProps extends Object>(
  WrappedComponent: AnyComponent<TProps, any>, // tslint:disable-line
  styling: React.CSSProperties | string
) => {
  const isClassName = typeof styling === 'string';

  const ExportedComponent: React.StatelessComponent<TProps> = (props, { isPending }) => {
    let styledProps = props;

    // Add styles to props if it is pending
    if (isPending) {
      styledProps = Object.assign({}, props, {
        className: isClassName ? styling : undefined,
        style: !isClassName ? styling : undefined
      });
    }

    return (
      <WrappedComponent {...styledProps} />
    );
  };

  ExportedComponent.contextTypes = {
    isPending: React.PropTypes.bool,
  };

  return ExportedComponent;
};
