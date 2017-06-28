/*
* Copyright (c) Trainline Limited, 2017. All rights reserved.
* See LICENSE.txt in the project root for license information.
*/

import * as React from 'react';
import styled from 'styled-components';
import CardCode from '../components/cardCode';
import data, { ApplicationState } from '../data';
import { navy } from '../colors';

const fakeAPI = () => new Promise<ApplicationState>((resolve, reject) => setTimeout(() => resolve(data), 2000));

const P = styled.p`
  font-size: 20px;
  line-height: 26px;
  margin: 40px auto;
  color: ${navy};
`;

const Container = styled.div`
  width: 80%;
  margin: auto;
`;

class Home extends React.Component<{}, ApplicationState> {
  state = {} as ApplicationState;

  componentWillMount() {
    fakeAPI().then((response) => this.setState(response));
  }

  render() {
    return (
      <Container>
        <P>Display a skeleton preview of your application's content before the data get loaded</P>
        <CardCode/>
      </Container>
    );
  }
}

export default Home;
