import * as React from 'react';

import { contextTypes, Context, Styling } from './utils';

export const createSkeletonElement = (customStyling?: Styling) => (type: any) => {
  const ExportedComponent: React.StatelessComponent<any> = (
    props: any, { skeletor: { isPending, styling } }: Context
  ) => React.createElement(type, {
    ...props,
    style: {
      ...props.style,
      ...(isPending && ((customStyling && customStyling.style) || (styling && styling.style)) || {}),
    },
    className: `${props.className}${isPending && (customStyling && (customStyling.className) || (styling && styling.className))}` // tslint:disable-line:max-line-length
  });

  ExportedComponent.contextTypes = contextTypes;

  return ExportedComponent;
};

export const elements = {
  div: createSkeletonElement()('div'),
  span: createSkeletonElement()('span'),
  h1: createSkeletonElement()('h1'),
  h2: createSkeletonElement()('h2'),
  h3: createSkeletonElement()('h4'),
  p: createSkeletonElement()('p'),
  img: createSkeletonElement()('img'),
  // TODO Add the rest!
};
