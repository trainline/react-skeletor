import * as React from 'react';
import styled from 'styled-components';
import CardCode from '../components/cardCode';
import data, { ApplicationState } from '../data';
import { storm } from '../colors';

const fakeAPI = () => new Promise<ApplicationState>((resolve, reject) => setTimeout(() => resolve(data), 10000002500));

const P = styled.p`
  font-size: 20px;
  line-height: 26px;
  width: 50%;
  margin: 40px auto;
  color: ${storm};
`;

const Container = styled.div`
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
