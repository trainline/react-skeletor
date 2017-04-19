import * as React from 'react';
import { mount } from 'enzyme';

import { createSkeletonProvider } from './createSkeletonProvider';

interface Card {
  firstName: string;
  lastName: string;
}

interface CardProps {
  card?: Card;
  something: string,
  isPending: boolean;
}

const Card: React.StatelessComponent<CardProps> = ({ card: { firstName, lastName } }) => (
  card
  ? (
    <div>
      <h1>{firstName}</h1>
      <h2>{lastName}</h2>
    </div>
  )
  : undefined!
);

// const pendingData: Partial<CardProps> = {
//   isPending: true,
// }

const dummyData: CardProps = {
  card: {
    firstName: '_____',
    lastName: '_____',
  },
  something: '',
  isPending: true,
};

const actualData: CardProps = {
  card: {
    firstName: 'Darth',
    lastName: 'Vader',
  },
  something: '',
  isPending: false,
};

// const pendingColor = '#00FF00';

// const pendingStyle = {
//   backgroundColor: pendingColor,
//   color: pendingColor,
//   borderColor: pendingColor,
// };

describe('createSkeletonProvider', () => {

  it('should pass through actual props if not pending', () => {
    const SkeletonizedCard = createSkeletonProvider<PendingProps>(
      dummyData,
    )(Card);

    const wrapper = mount(
      <SkeletonizedCard somet/>
    );


    const wrapper = mount(
      <SkeletonizedCard card={undefined}   />
    );

    expect(wrapper.find(Card).props()).toEqual(actualData);
  });


  // it('should pass through actual props if not pending', () => {
  //   const SkeletonizedCard = createSkeletonProvider(
  //     dummyData,
  //     ({ card, something, isPending }) => ,
  //     () => false,
  //   )(Card);

  //   const wrapper = mount(
  //     <SkeletonizedCard {...actualData} />
  //   );

  //   expect(wrapper.find(Card).props()).toEqual(actualData);
  // });

  // it('should pass through pending props if pending', () => {
  //   const SkeletonizedCard = createSkeletonProvider(
  //     dummyData,
  //     () => true,
  //   )(Card);

  //   const wrapper = mount(
  //     //<SkeletonizedCard {...pendingData as Partial<CardProps>} />
  //     <SkeletonizedCard isPending={false} props={} />
  //   );

  //   expect(wrapper.find(Card).props()).toEqual(dummyData);
  // });

});
