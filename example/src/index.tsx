import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Card from './card';

const rootEl = document.getElementById('root');

const data = {
  firstName: 'John',
  lastName: 'Brander',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam amet laudantium impedit temporibus nobis porro placeat saepe.' //tslint:disable-line
};

class Wrapper extends React.Component<void, { isLoading: boolean; }> {
  state = {
    isLoading: true
  };

  timeout: any;

  componentWillMount() {
    this.timeout = setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 5000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    return (
      <div>
        <Card data={data} isLoading={this.state.isLoading}/>
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