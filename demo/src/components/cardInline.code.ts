/*
* Copyright (c) Trainline Limited, 2017. All rights reserved.
* See LICENSE.txt in the project root for license information.
*/

export default `
const Div = createSkeletonElement('div', 'pending-home');

const Card = (props) => (
  <Container>
    <Div>{props.card.description}</Div>
  </Container>
);

const dummyData = {
  card: {
    description: '___ _____ __ __ _______ ____'
  }
};
const pendingPredicate = (props) => props.card === undefined;

const App = createSkeletonProvider(dummyData, pendingPredicate)(Card);

render(<App card={undefined}/>);
`.trim();