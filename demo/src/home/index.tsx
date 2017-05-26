import * as React from 'react';
import styled from 'styled-components';
import CardCode from '../components/cardCode';
import data, { ApplicationState } from '../data';

const fakeAPI = () => new Promise<ApplicationState>((resolve, reject) => setTimeout(() => resolve(data), 10000002500));

const P = styled.p`
  font-size: 20px;
`;

class Home extends React.Component<{}, ApplicationState> {
  state = {} as ApplicationState;

  componentWillMount() {
    fakeAPI().then((response) => this.setState(response));
  }

  render() {
    return (
      <div>
        <P>Display a skeleton preview of your application's content before the data get loaded</P>
        <CardCode/>
      </div>
    );
  }
}

export default Home;
