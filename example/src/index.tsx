import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Card, { Props } from './card';

const rootEl = document.getElementById('root');

const data: Props = {
  firstName: 'John',
  lastName: 'Brander',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam amet laudantium impedit temporibus nobis porro placeat saepe.', //tslint:disable-line
  isPending: true,
};

class Wrapper extends React.Component<void, { isPending: boolean; }> {
  state = {
    isPending: true
  };

  timeout: any;

  componentWillMount() {
    this.timeout = setTimeout(() => {
      this.setState({
        isPending: false
      });
    }, 5000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    return (
      <div>
        <Card {...data} />
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