import * as React from 'react';
import { createSkeletonProvider, Span } from 'react-skeletor';

import { UserCard } from '../../index';

import { Avatar, Content, FirstName, LastName, Container, Description } from './CardStyledComponents.styles';

const dummyData = {
  card: {
    firstName: '______',
    lastName: '____________',
    description: `
      ____ __________ __________ ___________ ___ _____ _____
      __ _____ __ ________ _____ ____`,
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
        <Span>{card.firstName}</Span>
      </FirstName>
      <LastName>
        <Span>{card.lastName}</Span>
      </LastName>
      <Description>{card.description}</Description>
    </Content>
  </Container>
);

const pendingColor = '#bdc3c7';

export default createSkeletonProvider<PendingProps, Props>(
  dummyData,
  // Declare pending state if data is undefined
  ({ card }: Props) => card === undefined,
  // Pass down pending style
  {
    style: {
      backgroundColor: pendingColor,
      color: pendingColor,
      borderColor: pendingColor,
    },
  }
)(Card);
