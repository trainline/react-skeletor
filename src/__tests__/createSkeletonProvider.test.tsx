/*
* Copyright (c) Trainline Limited, 2017. All rights reserved.
* See LICENSE.txt in the project root for license information.
*/

import * as React from 'react';
import { mount } from 'enzyme';

import { createSkeletonProvider } from '../createSkeletonProvider';

interface CardProps {
  firstName?: string;
  lastName?: string;
}

const Card: React.StatelessComponent<CardProps> = ({ firstName, lastName }) => (
  <div>
    <h1>{firstName}</h1>
    <h2>{lastName}</h2>
  </div>
);

const dummyData: CardProps = {
  firstName: '_____',
  lastName: '_____'
};

const actualData: CardProps = {
  firstName: 'Darth',
  lastName: 'Vader'
};

describe('createSkeletonProvider', () => {
  it('should render dummy data', () => {
    const SkeletonizedCard = createSkeletonProvider<CardProps>(
      dummyData,
      () => true
    )(Card);

    const wrapper = mount(<SkeletonizedCard />);

    expect(wrapper.find('h1').text()).toBe(dummyData.firstName);
  });

  it('should not render dummy data if no data are loading', () => {
    const SkeletonizedCard = createSkeletonProvider<CardProps>(
      dummyData,
      () => false
    )(Card);

    const wrapper = mount(<SkeletonizedCard {...actualData} />);

    expect(wrapper.find('h1').text()).toBe(actualData.firstName);
  });
});
