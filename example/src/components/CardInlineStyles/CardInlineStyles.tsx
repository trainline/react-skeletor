import * as React from 'react';
import { dummify, elements as skel } from 'react-pendifier';

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
      <skel.img style={styles.avatar} src={card.avatar} />
      <div style={styles.content}>
        <h1 style={styles.firstName}>
          <skel.span>{card.firstName}</skel.span>
        </h1>
        <h3 style={styles.lastName}>
          <skel.span>{card.lastName}</skel.span>
        </h3>
        <skel.div style={styles.description}>{card.description}</skel.div>
      </div>
    </div>
  </div>
);

const pendingColor = '#bdc3c7';

export default dummify(
  dummyData,
  // Declare pending state if data is undefined
  ({ card }: Props) => card === undefined,
  // Pass down pending style
  // TODO - Composable styling only HOC at this level instead of 3rd arg of dummify to avoid confusing data & styling?
  {
    style: {
      backgroundColor: pendingColor,
      color: pendingColor,
      borderColor: pendingColor,
    }
  }
)(Card);
