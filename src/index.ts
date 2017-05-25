import { createSkeletonElement } from './createSkeletonElement';

export { createSkeletonProvider } from './createSkeletonProvider';
export { createSkeletonElement } from './createSkeletonElement';

export const Div = createSkeletonElement('div');
export const Span = createSkeletonElement('span');
export const H1 = createSkeletonElement('h1');
export const H2 = createSkeletonElement('h2');
export const H3 = createSkeletonElement('h3');
export const P = createSkeletonElement('p');
export const Img = createSkeletonElement('img');

export default createSkeletonElement;
