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

const fakeAPI = () => new Promise<ApplicationState>((resolve, reject) => setTimeout(() => resolve(data), 10000002500));

const Container = styled.div`
  margin-top: 40px;
`;

class Home extends React.Component<{}, ApplicationState> {
  state = {} as ApplicationState;

  componentWillMount() {
    fakeAPI().then((response) => this.setState(response));
  }

  render() {
    return (
      <Container>
        <CardInlineStyles card={this.state.cardA}/>
        <CardStyledComponents card={this.state.cardB} title="A title"/>
        <CardCSS card={this.state.cardC}/>
      </Container>
    );
  }
}

export default Home;
