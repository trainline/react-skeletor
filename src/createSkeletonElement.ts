import * as React from 'react';

import { contextTypes, Context, Styling } from './utils';

const createCustomStyle = (isPending: boolean, prop?: React.CSSProperties, context?: React.CSSProperties, custom?: React.CSSProperties) => ({
  ...prop,
  ...(isPending ? context : undefined),
  ...(isPending ? custom : undefined)
})

const createClassName = (isPending: Boolean, prop?: string, context?: string, custom?: string) => (
  (prop ? `${prop} ` : '') +
  (context ? `${context} ` : '') +
  (custom ? `${custom} ` : '')
);

export const createSkeletonElement = (customStyling?: Styling) => (type: any) => {
  const ExportedComponent: React.StatelessComponent<any> = (
    props: any, { skeletor: { isPending, styling } }: Context
  ) => React.createElement(type, {
    ...props,
    style: createCustomStyle(isPending, props.style, styling && styling.style, customStyling && customStyling.style),
    className: createClassName(isPending, props.className, styling && styling.className, customStyling && customStyling.className)
  });

  ExportedComponent.contextTypes = contextTypes;

  return ExportedComponent;
};
