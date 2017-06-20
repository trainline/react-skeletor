/*
* Copyright (c) Trainline Limited, 2017. All rights reserved.
* See LICENSE.txt in the project root for license information.
*/

export interface UserCard {
  firstName: string;
  lastName: string;
  description: string;
  avatar: string;
  isPending?: boolean;
}

export interface ApplicationState {
  cardA: UserCard;
  cardB: UserCard;
  cardC: UserCard;
}

// Fake API
const data: ApplicationState = {
  cardA: {
    firstName: 'Alex',
    lastName: 'Rieux',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur metus in nibh porttitor ultricies. Vestibulum placerat blandit interdum.', //tslint:disable-line
    avatar: 'http://placehold.it/150x150',
    isPending: true,
  },
  cardB: {
    firstName: 'Jamie',
    lastName: 'Copeland',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur metus in nibh porttitor ultricies. Vestibulum placerat blandit interdum.', //tslint:disable-line
    avatar: 'http://placehold.it/150x150',
    isPending: true,
  },
  cardC: {
    firstName: 'Anonymous',
    lastName: 'Contrubutor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur metus in nibh porttitor ultricies. Vestibulum placerat blandit interdum.', //tslint:disable-line
    avatar: 'http://placehold.it/150x150',
    isPending: true,
  }
};

export default data;
