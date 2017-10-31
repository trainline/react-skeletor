/*
* Copyright (c) Trainline Limited, 2017. All rights reserved.
* See LICENSE.txt in the project root for license information.
*/
import * as React from 'react';
import { createSkeletonProvider, Span, Img, Div } from '../../../../';
import { css } from 'aphrodite/no-important';
import { Card } from '../../data';

import styles from './CardInlineStyles.styles';

const dummyData = {
  card: {
    title: '______',
    description: `
      ______ ___ ____ _____ ______ __________ __ _ _______ _____
      _____ _______ _____ __ __ ____________ ___`.trim(),
    avatar: ''
  }
};

export interface Props {
  card?: Card;
}

export const CardComponent: React.StatelessComponent<Props> = ({ card }) => (
  <div className={css(styles.container)}>
    <Img className={css(styles.avatar)} src={card!.avatar}/>
    <div className={css(styles.content)}>
      <h1 className={css(styles.firstName)}>
        <Span>{card!.title}</Span>
      </h1>
      <Div className={css(styles.description)}>{card!.description}</Div>
    </div>
  </div>
);

export default createSkeletonProvider(
  dummyData,
  (props: Props) => props.card === undefined,
  () => css(styles.pending)
)(CardComponent);
