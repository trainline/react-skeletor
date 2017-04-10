import * as React from 'react';
import * as ReactDOM from 'react-dom';
import CardInlineStyles from './components/CardInlineStyles/CardInlineStyles';
import CardStyledComponents from './components/CardStyledComponents/CardStyledComponents';

const rootEl = document.getElementById('root');

export interface UserCard {
  firstName: string;
  lastName: string;
  description: string;
  avatar: string;
  isPending?: boolean;
}

const data: UserCard = {
  firstName: 'Darth',
  lastName: 'Vader',
  description: 'It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire', //tslint:disable-line
  avatar: 'http://placehold.it/150x150',
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
    }, 2500);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    return (
      <div>
        <div>
          <CardInlineStyles card={this.state.data} />
        </div>
        <div>
          <CardStyledComponents card={this.state.data} />
        </div>
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