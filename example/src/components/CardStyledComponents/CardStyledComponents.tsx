import * as React from 'react';
import { dummify, elements as skel } from 'react-pendifier';

import { UserCard } from '../../index';

import { Avatar, Content, FirstName, LastName, Container, Description } from './CardStyledComponents.styles';

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
  <Container>
    <Avatar src="http://placehold.it/150x150" />
    <Content>
      <FirstName>
        <skel.span>{data.firstName}</skel.span>
      </FirstName>
      <LastName>
        <skel.span>{data.lastName}</skel.span>
      </LastName>
      <Description>{data.description}</Description>
    </Content>
  </Container>
);

const pendingColor = '#bdc3c7';

export default dummify(
  dummyData,
  // Declare pending state if data is undefined
  ({ data }: Props) => data === undefined,
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
