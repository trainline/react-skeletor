/*
* Copyright (c) Trainline Limited, 2017. All rights reserved.
* See LICENSE.txt in the project root for license information.
*/

import * as React from 'react';
import { createSkeletonProvider } from '../../../../';

import { UserCard } from '../../data';

import { Avatar, Content, FirstName, LastName, Container, Description, Name } from './CardStyledComponents.styles';

const dummyData = {
  card: {
    firstName: 'TTTTTTTT',
    lastName: 'TTTTTTTTTT',
    description: `
      TTT TTTTT TTT TTT T TTTTTTT TTT TTTTTT TTT TTT
      TT TTTTT TTTTT TTTTT TTTTT TTTT`,
    avatar: ''
  },
  title: 'defaultTitle',
};

export interface PendingProps {
  card?: UserCard;
  title: string;
}

export interface Props extends PendingProps {
  card: UserCard;
}

export const Card: React.StatelessComponent<Props> = ({ card }) => (
  <Container>
    <Avatar src={card.avatar} />
    <Content>
      <FirstName>
        <Name>{card.firstName}</Name>
      </FirstName>
      <LastName>
        <Name>{card.lastName}</Name>
      </LastName>
      <Description>{card.description}</Description>
    </Content>
  </Container>
);

export default createSkeletonProvider(
  dummyData,
  // Declare pending state if data is undefined
  ({ card }: Props) => card === undefined
)(Card);
