/*
* Copyright (c) Trainline Limited, 2017. All rights reserved.
* See LICENSE.txt in the project root for license information.
*/

import * as React from 'react';
import { contextTypes, Context } from './utils';

const createStyle = (styles: React.CSSProperties[]) => (
  styles.filter(Boolean).reduce((acc, next) => ({ ...acc, ...next }), {})
);

const createClassName = (classnames: (string|undefined)[]) => (
  classnames.filter(Boolean).join(' ')
);

export const createSkeletonElement = <
  P,
  T extends React.Component<P, React.ComponentState>,
  C extends React.ComponentClass<P>
>(type: React.ClassType<P, T, C> | string ) => {
  const ExportedComponent: React.StatelessComponent<any> = ( // tslint:disable-line
    props: any, { skeletor: { isPending, styling } }: Context // tslint:disable-line
  ) => React.createElement(type as any, { // tslint:disable-line
    ...props,
    style: isPending ? createStyle([
      props.style,
      styling && styling.style
    ]) : undefined,
    className: isPending ? createClassName([
      props.className,
      styling && styling.className
    ]) : undefined
  });

  ExportedComponent.contextTypes = contextTypes;

  return ExportedComponent;
};
