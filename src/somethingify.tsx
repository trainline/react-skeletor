import * as React from 'react';
import { contextTypes } from './utils';
import { Context } from '../lib/utils';

export const createSkeletonElement = (type: any) => {
  const ExportedComponent: React.StatelessComponent<any> = (
    props: any, { skeletor: { isPending, styling } }: Context
  ) => {
    const pendingStyle = isPending && typeof styling === 'object'
      ? styling
      : {};
    const pendingClassName = isPending && typeof styling === 'string'
      ? ` ${styling}`
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

  ExportedComponent.contextTypes = contextTypes;

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
  // TODO Add the rest!
};
