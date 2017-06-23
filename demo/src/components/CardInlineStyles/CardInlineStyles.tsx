/*
* Copyright (c) Trainline Limited, 2017. All rights reserved.
* See LICENSE.txt in the project root for license information.
*/

import * as React from 'react';
import { createSkeletonProvider, Span, Img, Div } from '../../../../';

import { UserCard } from '../../data';

import styles from './CardInlineStyles.styles';

const dummyData = {
  card: {
    firstName: 'TTTTTT',
    lastName: 'TTTTTTTTTTTT',
    description: `
      TTTTTT TTT TTTT TTTTT TTTTTT TTTTTTTTTT TT T TTTTTTT TTTTT
      TTTTT TTTTTTT TTTTT TT TT TTTTTTTTTTTT TTT`,
    avatar: ''
  }
};

export interface Props {
  card: UserCard;
}

export const Card: React.StatelessComponent<Props> = ({ card }) => (
  <div style={styles.container}>
    <Img style={styles.avatar} src={card.avatar}/>
    <div style={styles.content}>
      <h1 style={styles.firstName}>
        <Span>{card.firstName}</Span>
      </h1>
      <h3 style={styles.lastName}>
        <Span>{card.lastName}</Span>
      </h3>
      <Div style={styles.description}>{card.description}</Div>
    </div>
  </div>
);

export default createSkeletonProvider(
  dummyData,
  // Declare pending state if data is undefined
  ({ card }: Props) => card === undefined,
  // Pass down pending style
  () => 'pending'
)(Card);
