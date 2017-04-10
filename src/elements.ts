import { createSkeletonElement } from './createSkeletonElement';
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
