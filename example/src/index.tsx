import * as React from 'react';
import * as ReactDOM from 'react-dom';
import CardInline from './components/CardInlineStyles/CardInlineStyles';

const rootEl = document.getElementById('root');

export interface UserCard {
  firstName: string;
  lastName: string;
  description: string;
  isPending?: boolean;
}

const data: UserCard = {
  firstName: 'Darth',
  lastName: 'Vader',
  description: 'It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire', //tslint:disable-line
  isPending: true,
};

interface State {
  data: UserCard;
}

class App extends React.Component<void, State> {
  state = {} as State;

  timeout: number;

  componentWillMount() {
    this.timeout = setTimeout(() => {
      this.setState({
        data
      });
    }, 3500);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    return (
      <div>
        <CardInline data={this.state.data} />
      </div>
    );
  }
}

function render() {
  ReactDOM.render(
    <App/>,
    rootEl
  );
}

render();