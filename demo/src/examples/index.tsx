/*
* Copyright (c) Trainline Limited, 2017. All rights reserved.
* See LICENSE.txt in the project root for license information.
*/

import * as React from 'react';
import styled from 'styled-components';
import CardStyledComponents from '../components/CardStyledComponents/CardStyledComponents';
import CardInlineStyles from '../components/CardInlineStyles/CardInlineStyles';
import CardCSS from '../components/CardCSS/CardCSS';
import data, { ApplicationState } from '../data';
import { fern } from '../colors';

const fakeAPI = () => new Promise<ApplicationState>((resolve, reject) => setTimeout(() => resolve(data), 2000));

const Container = styled.div`
  margin-top: 40px;
  text-align: left;
  width: 70%;
  margin: auto;
`;

const Button = styled.button`
  border: none;
  background-color: ${fern};
  border-radius: 5px;
  padding: 6px 20px;
  color: white;
  margin-bottom: 20px;
  margin-top: 40px;
`;

const initialState: ApplicationState = {
  cardA: undefined,
  cardB: undefined,
  cardC: undefined
};

class Home extends React.Component<{}, ApplicationState> {
  state = initialState;

  componentWillMount() {
    fakeAPI().then((response) => this.setState(response));
  }

  onLoadData = () => {
    if (this.state.cardA) {
      this.setState(initialState);
      fakeAPI().then((response) => this.setState(response));
    }
  }

  render() {
    return (
      <Container>
        <Button onClick={this.onLoadData}>Fetch data</Button>
        <CardInlineStyles card={this.state.cardA}/>
        <CardStyledComponents card={this.state.cardB}/>
        <CardCSS card={this.state.cardC}/>
      </Container>
    );
  }
}

export default Home;
