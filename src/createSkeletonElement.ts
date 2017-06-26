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
>(
  type: React.ClassType<P, T, C> | string,
  pendingStyle?: React.CSSProperties | string
 ) => {
  const ExportedComponent: React.StatelessComponent<any> = ( // tslint:disable-line
    props: any, { skeletor }: Context // tslint:disable-line
  ) => {
    let isPending;
    let styling;
    if (skeletor) {
      isPending = skeletor.isPending;
      styling = skeletor.styling;
    }

    let newProps = { ...props};
    if (isPending) {
      const contextStyle = typeof styling === 'function' ? styling() : undefined;

      newProps.style = createStyle([
        props.style,
        typeof contextStyle !== 'string' && contextStyle,
        typeof pendingStyle !== 'string' && pendingStyle
      ]);

      newProps.className = createClassName([
        props.className,
        typeof contextStyle === 'string' && contextStyle,
        typeof pendingStyle === 'string' && pendingStyle
      ]);
    }
    // tslint:disable-next-line:no-any
    return React.createElement(type as any, newProps);
  };

  ExportedComponent.contextTypes = contextTypes;

  return ExportedComponent;
};
