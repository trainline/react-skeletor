/*
* Copyright (c) Trainline Limited, 2017. All rights reserved.
* See LICENSE.txt in the project root for license information.
*/
import * as React from 'react';
import { contextTypes, Context, Styling } from './utils';

const createStyle = (styles: (React.CSSProperties | boolean | undefined)[]) =>
  styles
    // tslint:disable-next-line:no-any
    .filter((style: any): style is React.CSSProperties => !!style)
    .reduce((acc, next) => ({ ...acc, ...next }), {});

const createClassName = (classnames: (string | undefined | boolean)[]) =>
  classnames
    .filter(Boolean)
    .join(' ');

const unwrapStyle = (style?: Styling) => {
  if (!style) {
    return undefined;
  }

  if (typeof style === 'function') {
    return style();
  }

  return style;
};

export interface InjectedProps {
  style?: React.CSSProperties | undefined;
  className?: string | undefined;
  'aria-hidden'?: boolean;
}

// tslint:disable-next-line:no-any
export const createSkeletonElement = <T = any>(
  type: React.SFC<T> | string,
  pendingStyle?: Styling
) => {
  const ExportedComponent: React.StatelessComponent<T> = (
    props: T & InjectedProps,
    { skeletor }: Context
  ) => {
    let isPending;
    let styling;
    if (skeletor) {
      isPending = skeletor.isPending;
      styling = skeletor.styling;
    }

    // tslint:disable-next-line:no-any
    let newProps: T & InjectedProps = { ...(props as any) };
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

    return React.createElement(type, newProps);
  };

  ExportedComponent.contextTypes = contextTypes;

  return ExportedComponent;
};
