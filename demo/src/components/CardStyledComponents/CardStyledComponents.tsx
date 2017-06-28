/*
* Copyright (c) Trainline Limited, 2017. All rights reserved.
* See LICENSE.txt in the project root for license information.
*/

import * as React from 'react';
import { createSkeletonProvider } from '../../../../';

import { Card } from '../../data';

import { Avatar, Content, Title, Container, Description } from './CardStyledComponents.styles';

const dummyData = {
  card: {
    title: '________',
    description: `
      ___ _____ ___ ___ _ _______ ___ ______ ___ ___
      __ _____ _____ _____ _____ ____`.trim(),
    avatar: ''
  },
  title: 'defaultTitle',
};

export interface PendingProps {
  card?: Card;
  title: string;
}

export interface Props extends PendingProps {
  card: Card;
}

export const CardComponent: React.StatelessComponent<Props> = ({ card }) => (
  <Container>
    <Avatar src={card.avatar} />
    <Content>
      <Title>{card.title}</Title>
      <Description>{card.description}</Description>
    </Content>
  </Container>
);

export default createSkeletonProvider(
  dummyData,
  // Declare pending state if data is undefined
  (props: Props) => props.card === undefined
)(CardComponent);
