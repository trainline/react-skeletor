import * as React from 'react';
import { createSkeletonProvider, elements as sk } from 'react-skeletor';

import { UserCard } from '../../index';

const dummyData = {
  card: {
    firstName: '______',
    lastName: '____________',
    description: `
      ____ __________ __________ ___________ ___ _____ _____
      __ `,
    avatar: ''
  }
};

export interface Props {
  card: UserCard;
}

export const Card: React.StatelessComponent<Props> = ({ card }) => (
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
          width: 80%;
          margin: 40px auto;
          border: 1px solid #ddd;
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
          color: #95a5a6;
          margin-top: 10px;
        }
      ` }}
    />
    <div className="card__container">
      <sk.img className="card__avatar" src={card.avatar} />
      <div className="card__content">
        <h1 className="card__first-name">
          <sk.span>{card.firstName}</sk.span>
        </h1>
        <h3 className="card__last-name">
          <sk.span>{card.lastName}</sk.span>
        </h3>
        <sk.div className="card__description">{card.description}</sk.div>
      </div>
    </div>
  </div>
);

export default createSkeletonProvider(
  dummyData,

  // Declare pending state if data is undefined
  ({ card }: Props) => card === undefined,

  // Pass down pending style
  {
    className: 'pending',
  }
)(Card);
