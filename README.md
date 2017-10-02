[![npm](https://img.shields.io/npm/v/@trainline/react-skeletor.svg)](https://www.npmjs.com/package/@trainline/react-skeletor)
[![license](https://img.shields.io/github/license/trainline/react-skeletor.svg)](https://github.com/trainline/react-skeletor/blob/master/LICENSE.md)
[![Travis](https://img.shields.io/travis/trainline/react-skeletor.svg)]()
[![npm](https://img.shields.io/npm/dm/@trainline/react-skeletor.svg)](https://www.npmjs.com/package/@trainline/react-skeletor)

# React Skeletor

![React-skeletor gif](/react-skeletor.gif)

Display a skeleton preview of the application's content before the data get loaded.
<br/>
- Inject dummy data into the provider
- Define your loading status with the provider
- Wrap leaf component with `createSkeletorElement` and define the style of the component when it is pending. The component will do all the magic for you, it will turn on / off the pending design for you.

## [Demo](https://trainline.github.io/react-skeletor)

## [Documentation](Documentation.md)

### Basic usage

1. Install via npm

```
npm install @trainline/react-skeletor
```

2. Wrap the component (often a container) with the `createSkeletonProvider` high order component. This adds the loading status and style into the [context](https://facebook.github.io/react/docs/context.html) and inject fake data in the components subtree.

```jsx
// UserDetailPage.jsx

import { createSkeletonProvider } from '@trainline/react-skeletor';

const UserDetailPage = ({ user }) => (
  <div>
    ...
    <NameCard user={user} />
    ...
  </div>
)

export default createSkeletonProvider(
  // Dummy data with a similar shape to the component's data
  {
    user: {
      firstName: '_____',
      lastName: '________'
    }
  },
  // Predicate that returns true if component is in a loading state
  ({ user }) => user === undefined,
  // Define the placeholder styling for the children elements,
  () => ({
    color: 'grey',
    backgroundColor: 'grey'
  })
)(UserDetailPage);
```

3. Use a skeleton element to toggle between the placehoder design and the real content depending on the loading status in the context.

```jsx
// NameCard.jsx

import { createSkeletonElement } from '@trainline/react-skeletor';

const H1 = createSkeletonElement('h1');
const H2 = createSkeletonElement('h2');

const NameCard = ({ firstName, lastName }) => (
  <div>
    <H1 style={style}>{ firstName }</H1>
    <H2 style={style}>{ lastName }</H2>
  </div>
)

export default NameCard;

```

### Contribute
Before opening any Pull Request please [post an issue](https://github.com/trainline/react-skeletor/issues/new) explaining the problem so that the team can evaluate if the Pull Request is relevant.

[Learn more on medium](https://codeburst.io/achieve-skeleton-loading-with-react-a12404678030)
