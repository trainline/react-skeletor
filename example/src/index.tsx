import * as React from 'react';
import * as ReactDOM from 'react-dom';

import CardStyledComponents from './components/CardStyledComponents/CardStyledComponents';
import CardInlineStyles from './components/CardInlineStyles/CardInlineStyles';
import CardCSS from './components/CardCSS/CardCSS';


// Application data shape

export interface UserCard {
  firstName: string;
  lastName: string;
  description: string;
  avatar: string;
  isPending?: boolean;
}

interface ApplicationState {
  cardA: UserCard;
  cardB: UserCard;
  cardC: UserCard;
}

// Fake API

const data: ApplicationState = {
  cardA: {
    firstName: 'Darth',
    lastName: 'Vader',
    description: 'It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire', //tslint:disable-line
    avatar: 'http://placehold.it/150x150',
    isPending: true,
  },
  cardB: {
    firstName: 'Lando',
    lastName: 'Calrissian',
    description: 'It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire', //tslint:disable-line
    avatar: 'http://placehold.it/150x150',
    isPending: true,
  },
  cardC: {
    firstName: 'Jar Jar',
    lastName: 'Binks',
    description: 'It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire', //tslint:disable-line
    avatar: 'http://placehold.it/150x150',
    isPending: true,
  }
};

const fakeAPI = () => new Promise<ApplicationState>((resolve, reject) => setTimeout(() => resolve(data), 10000002500));

// Application Component

class App extends React.Component<void, ApplicationState> {
  state = {} as ApplicationState;

  componentWillMount() {
    fakeAPI().then((response) => this.setState(response));
  }

  render() {
    return (
      <div>
        <CardInlineStyles card={this.state.cardA} />
        <CardStyledComponents card={this.state.cardB} />
        <CardCSS card={this.state.cardC} />
      </div>
    );
  }
}

function render() {
  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );
}

render();
