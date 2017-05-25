import * as React from 'react';
import { createSkeletonProvider, Span, Img, Div } from 'react-skeletor';

import { UserCard } from '../../index';

import styles from './CardInlineStyles.styles';

const dummyData = {
  card: {
    firstName: '______',
    lastName: '____________',
    description: `
      ____ __________ __________ ___________ ___ _____ _____
      __ _____ __ ________ _____ ____`,
    avatar: ''
  }
};

export interface Props {
  card: UserCard;
}

export const Card: React.StatelessComponent<Props> = ({ card }) => (
  <div>
    <div style={styles.container}>
      <Img style={styles.avatar} src={card.avatar} />
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
  </div>
);

const pendingColor = '#bdc3c7';

export default createSkeletonProvider(
  dummyData,

  // Declare pending state if data is undefined
  ({ card }: Props) => card === undefined,

  // Pass down pending style
  {
    style: {
      backgroundColor: pendingColor,
      color: pendingColor,
      borderColor: pendingColor,
    }
  }
)(Card);
