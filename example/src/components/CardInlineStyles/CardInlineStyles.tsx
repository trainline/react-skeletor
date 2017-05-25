import * as React from 'react';
import { createSkeletonProvider, Span, Img, Div } from 'react-skeletor';

import { UserCard } from '../../index';

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
  <div style={styles.wrapper}>
    <h3>Rendering:</h3>
    <div style={styles.container}>
      <Img style={styles.avatar} src={card.avatar} className="pending"/>
      <div style={styles.content}>
        <h1 style={styles.firstName}>
          <Span className="pending">{card.firstName}</Span>
        </h1>
        <h3 style={styles.lastName}>
          <Span className="pending">{card.lastName}</Span>
        </h3>
        <Div style={styles.description} className="pending">{card.description}</Div>
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
