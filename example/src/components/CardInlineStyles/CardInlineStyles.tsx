import * as React from 'react';
import { dummify, elements as skel } from 'react-pendifier';

import { UserCard } from '../../index';

import styles from './CardInlineStyles.styles';

const dummyData = {
  data: {
    firstName: '______',
    lastName: '____________',
    description: `
      ____ __________ __________ ___________ ___ _____ _____
      __ _____ __ ________ _____ ____`
  }
};

export interface Props {
  data: UserCard;
}

export const Card: React.StatelessComponent<Props> = ({ data }) => (
  <div>
    <div style={styles.container}>
      <skel.img style={styles.avatar} src="http://placehold.it/150x150" />
      <div style={styles.content}>
        <h1 style={styles.firstName}>
          <skel.span>{data.firstName}</skel.span>
        </h1>
        <h3 style={styles.lastName}>
          <skel.span>{data.lastName}</skel.span>
        </h3>
        <skel.div style={styles.description}>{data.description}</skel.div>
      </div>
    </div>
  </div>
);

const pendingColor = '#bdc3c7';

export default dummify(
  dummyData,
  // Declare pending state if data is undefined
  ({ data }: Props) => data === undefined,
  // Pass down pending style
  // TODO - Composable styling only HOC at this level instead of 3rd arg of dummify to avoid confusing data & styling?
  {
    backgroundColor: pendingColor,
    color: pendingColor,
    borderColor: pendingColor,
  }
)(Card);
