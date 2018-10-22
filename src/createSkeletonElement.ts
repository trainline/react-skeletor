/*
* Copyright (c) Trainline Limited, 2017. All rights reserved.
* See LICENSE.txt in the project root for license information.
*/
import * as React from 'react';
import { contextTypes, Context, Styling } from './utils';

const createStyle = (styles: (React.CSSProperties | undefined)[]) =>
  styles
    // tslint:disable-next-line:no-any
    .filter((style: any): style is React.CSSProperties => !!style)
    .reduce((acc, next) => ({ ...acc, ...next }), {});

const createClassName = (classnames: (string | undefined)[]) =>
  classnames
    .filter(Boolean)
    .join(' ');

const unwrapStyle = (style?: Styling) =>
  typeof style === 'function' ?
    style() :
    (style || undefined);

export interface InjectedProps {
  style?: React.CSSProperties;
  className?: string;
  'aria-hidden'?: boolean;
}

// tslint:disable-next-line:no-any
export const createSkeletonElement = <T = any>(
  type: React.ComponentType<T> | string,
  pendingStyle?: Styling
) => {
  const ExportedComponent: React.StatelessComponent<T> = (
    props: T & InjectedProps,
    { skeletor }: Context
  ) => {
    const { isPending = false, styling = undefined } = skeletor || {};

    // tslint:disable-next-line:no-any
    const newProps: T & InjectedProps = { ...(props as any) };
    if (isPending) {
      const [ contextStyle, propStyle ] = [ styling, pendingStyle ].map(unwrapStyle);

      newProps.style = createStyle([
        props.style,
        typeof contextStyle !== 'string' && contextStyle || undefined,
        typeof propStyle !== 'string' && propStyle || undefined
      ]);

      newProps.className = createClassName([
        props.className,
        typeof contextStyle === 'string' && contextStyle || undefined,
        typeof propStyle === 'string' && propStyle || undefined
      ]);

      newProps['aria-hidden'] = true;
    }

    return React.createElement(type, newProps);
  };

  ExportedComponent.contextTypes = contextTypes;

  return ExportedComponent;
};
