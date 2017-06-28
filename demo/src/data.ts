/*
* Copyright (c) Trainline Limited, 2017. All rights reserved.
* See LICENSE.txt in the project root for license information.
*/

export interface Card {
  title: string;
  description: string;
  avatar: string;
}

export interface ApplicationState {
  cardA?: Card;
  cardB?: Card;
  cardC?: Card;
}

// Fake API
const data: ApplicationState = {
  cardA: {
    title: 'The simpsons',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur metus in nibh porttitor ultricies. Vestibulum placerat blandit interdum.', //tslint:disable-line
    avatar: 'http://lorempicsum.com/simpsons/255/200/2'
  },
  cardB: {
    title: 'Futurama',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur metus in nibh porttitor ultricies. Vestibulum placerat blandit interdum.', //tslint:disable-line
    avatar: 'http://lorempicsum.com/futurama/255/200/2'
  },
  cardC: {
    title: 'Up',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur metus in nibh porttitor ultricies. Vestibulum placerat blandit interdum.', //tslint:disable-line
    avatar: 'http://lorempicsum.com/up/255/200/2'
  }
};

export default data;
