/*
* Copyright (c) Trainline Limited, 2017. All rights reserved.
* See LICENSE.txt in the project root for license information.
*/

import * as React from 'react';
import { createSkeletonProvider, Span, Img, Div } from '../../../../';
import { Card } from '../../data';
import './CardCSS.css';

const dummyData = {
  card: {
    title: '_______',
    description: `
      _______ _______________ _______ _______ ____
      _________ `.trim(),
    avatar: ''
  }
};

export interface Props {
  card?: Card;
}

export const CardComponent: React.StatelessComponent<Props> = ({ card }) => (
  <div>
    <div className="card__container">
      <Img className="card__avatar" src={card!.avatar} />
      <div className="card__content">
        <h1 className="card__first-name">
          <Span>{card!.title}</Span>
        </h1>
        <Div className="card__description">{card!.description}</Div>
      </div>
    </div>
  </div>
);

export default createSkeletonProvider(
  dummyData,
  // Declare pending state if data is undefined
  ({ card }) => card === undefined,
  // Pass down pending className, defined in index.ejs of this project
  'pending'
)(CardComponent);
