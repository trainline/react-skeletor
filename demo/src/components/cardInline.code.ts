/*
* Copyright (c) Trainline Limited, 2017. All rights reserved.
* See LICENSE.txt in the project root for license information.
*/

export default `import * as React from 'react';
import { createSkeletonProvider, Div } from 'react-skeletor';

export const Card = ({ card }) => (
  <Div className="pending">{card.description}</Div>
);

const dummyData = {
  card: {
    description: 'TTTTTT'
  }
};

export default createSkeletonProvider(
  dummyData,
  // Declare pending state if data is undefined
  ({ card }: Props) => card === undefined,
  // Pass down pending style
  {
    style: {
      backgroundColor: '#bdc3c7',
      color: '#bdc3c7',
      borderColor: '#bdc3c7',
    }
  }
)(Card);
`;