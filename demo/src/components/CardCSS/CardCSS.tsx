/*
* Copyright (c) Trainline Limited, 2017. All rights reserved.
* See LICENSE.txt in the project root for license information.
*/

import * as React from 'react';
import { createSkeletonProvider, Span, Img, Div } from '../../../../';

import { Card } from '../../data';

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
  card: Card;
}

export const CardComponent: React.StatelessComponent<Props> = ({ card }) => (
  <div>
    {/*
      Adding styles inline like this is not a good idea!
      This was done to avoid complicating the build with a custom webpack config.
      If you plan to do you styling with traditional CSS, include it in a file living alongside your component.
      And take a look at CSS Modules: https://github.com/css-modules/css-modules
    */}
    <style
      dangerouslySetInnerHTML={{ __html: `
        .card__container {
          display: flex;
          margin: auto;
          border: 1px solid #ddd;
          border-radius: 5px;
        }

        .card__avatar {
          display: block;
          width: 150px;
          height: 150px;
        }

        .card__content {
          background-color: #f0f0f0;
          padding: 10px 16px;
          color: #34495e;
          font-family: system-ui, sans-serif;
          width: calc(100% - 150px);
        }

        .card__first-name {
          margin-top: 0;
          margin-bottom: 10px;
        }

        .card__last-name {
          margin: 0;
        }

        .card__description {
          color: #34495e;
          margin-top: 10px;
        }
      ` }}
    />
    <div className="card__container">
      <Img className="card__avatar" src={card.avatar} />
      <div className="card__content">
        <h1 className="card__first-name">
          <Span>{card.title}</Span>
        </h1>
        <Div className="card__description">{card.description}</Div>
      </div>
    </div>
  </div>
);

export default createSkeletonProvider(
  dummyData,
  // Declare pending state if data is undefined
  ({ card }: Props) => card === undefined,
  // Pass down pending className, defined in index.ejs of this project
  () => 'pending'
)(CardComponent);
