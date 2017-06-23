[![npm](https://img.shields.io/npm/v/@trainline/react-skeletor.svg)](https://www.npmjs.com/package/@trainline/react-skeletor)
[![license](https://img.shields.io/github/license/trainline/react-skeletor.svg)](https://github.com/trainline/react-skeletor/blob/master/LICENSE.md)
[![Travis](https://img.shields.io/travis/trainline/react-skeletor.svg)]()
[![npm](https://img.shields.io/npm/dm/@trainline/react-skeletor.svg)](https://www.npmjs.com/package/@trainline/react-skeletor)

# React Skeletor

![React-skeletor gif](/react-skeletor.gif)

## Skeleton preview for React components

Display a skeleton preview of your application's content before the data get loaded

## [Documentation](Documentation.md)

### Basic usage

1. Install via npm

```
npm install @trainline/react-skeletor
```

2. Wrap your component (often a container) with the `createSkeletonProvider` high order component. This adds the pending status and style into the [context](https://facebook.github.io/react/docs/context.html).

```jsx
// UserDetailPage.js

import { createSkeletonProvider } from '@trainline/react-skeletor';

const UserDetailPage = ({ user }) => (
  <div>
    ...
    <NameCard user={user} />
    ...
  </div>
)

export default createSkeletonProvider(
  // Dummy data with a similar shape to your component's data
  {
    firstName: '_____',
    lastName: '________'
  },
  // Predicate specifying whether or not your data is loaded
  ({ user }) => user === undefined,
  // Define the placeholder design for your children elements,
  () => ({
    color: 'grey',
    backgroundColor: 'grey'
  })
)(UserDetailPage);
```

3. Use a skeleton element to magically style your component when data is pending with zero effort!

```jsx
// NameCard.js

import { h1 as SkeletonH1, h2 as SkeletonH2 } from '@trainline/react-skeletor';

const NameCard = ({ firstName, lastName }) => (
  <div>
    <SkeletonH1 style={style}>{ firstName }</SkeletonH1>
    <SkeletonH2 style={style}>{ lastName }</SkeletonH2>
  </div>
)

export default NameCard;

```

### Contribute
Before opening any Pull Request please [post an issue](https://github.com/trainline/react-skeletor/issues/new) explaining the problem so that the team can evaluate if the Pull Request is relevant.
