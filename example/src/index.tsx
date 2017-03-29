import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Card from './card';

const rootEl = document.getElementById('root');

export interface UserCard {
  firstName: string;
  lastName: string;
  description: string;
  isPending?: boolean;
}

const data: UserCard = {
  firstName: 'John',
  lastName: 'Brander',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam amet laudantium impedit temporibus nobis porro placeat saepe.', //tslint:disable-line
  isPending: true,
};

interface State {
  data: UserCard;
}

class Wrapper extends React.Component<void, State> {
  state = {} as State;

  timeout: any;

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
        <Card data={this.state.data} />
      </div>
    );
  }
}

function render() {
  ReactDOM.render(
    <Wrapper/>,
    rootEl
  );
}

render();