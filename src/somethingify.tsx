import * as React from 'react';

export const createSkeletonElement = (type: any) => {
  const ExportedComponent: React.StatelessComponent<any> = (props: any, context: any) => {
    const pendingStyle = context.isPending && typeof context.styling === 'object'
      ? context.styling
      : {};
    const pendingClassName = context.isPending && typeof context.styling === 'string'
      ? ` ${context.styling}`
      : '';

    return React.createElement(type, {
      ...props,
      style: {
        ...props.style,
        ...pendingStyle
      },
      className: `${props.className}${pendingClassName}`
    });
  };

  ExportedComponent.contextTypes = {
    isPending: React.PropTypes.bool,
    styling: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.object,
    ]),
  };

  return ExportedComponent;
};

export const elements = {
  div: createSkeletonElement('div'),
  span: createSkeletonElement('span'),
  h1: createSkeletonElement('h1'),
  h2: createSkeletonElement('h2'),
  h3: createSkeletonElement('h4'),
  p: createSkeletonElement('p'),
  img: createSkeletonElement('img'),
};
