import * as React from 'react';

import { contextTypes, Context } from './utils';

const createCustomStyle = (
  isPending: boolean,
  prop?: React.CSSProperties,
  context?: React.CSSProperties,
  custom?: React.CSSProperties
) => ({
  ...prop,
  ...(isPending ? context : undefined),
  ...(isPending ? custom : undefined)
});

const createClassName = (isPending: Boolean, prop?: string, context?: string, custom?: string) => (
  (prop ? `${prop} ` : '') +
  (context ? `${context} ` : '') +
  (custom ? custom : '')
);

export const createSkeletonElement = (type: string) => {
  const ExportedComponent: React.StatelessComponent<any> = ( // tslint:disable-line
    props: any, { skeletor: { isPending, styling } }: Context // tslint:disable-line
  ) => React.createElement(type, {
    ...props,
    style: createCustomStyle(
      isPending,
      props.style,
      styling && styling.style
    ),
    className: createClassName(
      isPending,
      props.className,
      styling && styling.className
    )
  });

  ExportedComponent.contextTypes = contextTypes;

  return ExportedComponent;
};
