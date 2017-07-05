/*
* Copyright (c) Trainline Limited, 2017. All rights reserved.
* See LICENSE.txt in the project root for license information.
*/
import * as React from 'react';
import { contextTypes, Context, Styling } from './utils';

const createStyle = (styles: React.CSSProperties[]) => (
  styles.filter(Boolean).reduce((acc, next) => ({ ...acc, ...next }), {})
);

const createClassName = (classnames: (string|undefined)[]) => (
  classnames.filter(Boolean).join(' ')
);

const unwrapStyle = (style?: Styling) => {
  if (!style) {
    return undefined;
  }

  if (typeof style === 'function') {
    return style();
  }

  return style;
};

export const createSkeletonElement = <
  P,
  T extends React.Component<P, React.ComponentState>,
  C extends React.ComponentClass<P>
>(
  type: React.ClassType<P, T, C> | string,
  pendingStyle?: Styling
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

    let newProps = { ...props };
    if (isPending) {
      const contextStyle = unwrapStyle(styling);
      const propStyle = unwrapStyle(pendingStyle);

      newProps.style = createStyle([
        props.style,
        typeof contextStyle !== 'string' && contextStyle,
        typeof propStyle !== 'string' && propStyle
      ]);

      newProps.className = createClassName([
        props.className,
        typeof contextStyle === 'string' && contextStyle,
        typeof propStyle === 'string' && propStyle
      ]);

      newProps['aria-hidden'] = true;
    }
    // tslint:disable-next-line:no-any
    return React.createElement(type as any, newProps);
  };

  ExportedComponent.contextTypes = contextTypes;

  return ExportedComponent;
};
