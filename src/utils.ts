/*
* Copyright (c) Trainline Limited, 2017. All rights reserved.
* See LICENSE.txt in the project root for license information.
*/
import * as React from 'react';
import * as PropTypes from 'prop-types';

export type Styling =
  | (() => React.CSSProperties)
  | React.CSSProperties
  | string;

export interface Pendable {
  isPending: boolean;
}

export interface SkeletorContext {
  isPending: boolean;
  styling: Styling;
}

export interface Context {
  skeletor: SkeletorContext;
}

export const createSkeletonStyle = (color: string) => ({
  backgroundColor: color,
  color
});

export const contextTypes = {
  skeletor: PropTypes.shape({
    isPending: PropTypes.bool,
    styling: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.string,
      PropTypes.object
    ])
  })
};
