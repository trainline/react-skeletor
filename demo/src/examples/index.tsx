import * as React from 'react';
// import styled from 'styled-components';
import CardStyledComponents from '../components/CardStyledComponents/CardStyledComponents';
import CardInlineStyles from '../components/CardInlineStyles/CardInlineStyles';
import CardCSS from '../components/CardCSS/CardCSS';
import data, { ApplicationState } from '../data';

const fakeAPI = () => new Promise<ApplicationState>((resolve, reject) => setTimeout(() => resolve(data), 10000002500));

class Home extends React.Component<{}, ApplicationState> {
  state = {} as ApplicationState;

  componentWillMount() {
    fakeAPI().then((response) => this.setState(response));
  }

  render() {
    return (
      <div>
        <CardInlineStyles card={this.state.cardA}/>
        <CardStyledComponents card={this.state.cardB} title="A title"/>
        <CardCSS card={this.state.cardC}/>
      </div>
    );
  }
}

export default Home;
