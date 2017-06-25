[![npm](https://img.shields.io/npm/v/@trainline/react-skeletor.svg)](https://www.npmjs.com/package/@trainline/react-skeletor)
[![license](https://img.shields.io/github/license/trainline/react-skeletor.svg)](https://github.com/trainline/react-skeletor/blob/master/LICENSE.md)
[![Travis](https://img.shields.io/travis/trainline/react-skeletor.svg)]()
[![npm](https://img.shields.io/npm/dm/@trainline/react-skeletor.svg)](https://www.npmjs.com/package/@trainline/react-skeletor)

# React Skeletor

![React-skeletor gif](/react-skeletor.gif)

Display a skeleton preview of the application's content before the data get loaded.

## How it works
![React-skeletor gif](/blog_posts.png)

Red box: Component `createSkeletonProvider` responsible for injecting the dummy data in order to make sure you render all the nested components. The number of characters of the properties of the injected dummy data is going to define the length of your placeholder designs.

Green box: Component `createSkeletonElement` should wrap a leaf component (title, description, image...), it will switch between the placeholder design defined as a third parameter of `createSkeletonProvider` or second parameter of `createSkeletonElement` and the content of the data.

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
    firstName: '_____',
    lastName: '________'
  },
  // Predicate specifying whether or not the data is loaded
  ({ user }) => user === undefined,
  // Define the placeholder design for the children elements,
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
