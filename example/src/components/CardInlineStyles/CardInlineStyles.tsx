import * as React from 'react';
import { createSkeletonProvider, elements as sk } from 'react-skeletor';

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
      <sk.img style={styles.avatar} src={card.avatar} />
      <div style={styles.content}>
        <h1 style={styles.firstName}>
          <sk.span>{card.firstName}</sk.span>
        </h1>
        <h3 style={styles.lastName}>
          <sk.span>{card.lastName}</sk.span>
        </h3>
        <sk.div style={styles.description}>{card.description}</sk.div>
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
