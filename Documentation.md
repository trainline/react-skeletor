### createSkeletonProvider
High Order Function which defines the loading state of your app and inject the dummy data to your children components.

#### Signature
```ts
const createSkeletonProvider = <TPendingProps, TProps extends TPendingProps = TPendingProps>(
  dummyData: TPendingProps | (props: TPendingProps) => TPendingProps,
  predicate: (props: TPendingProps) => boolean,
  styling?: () => React.CSSProperties | string,
) => (WrappedComponent: AnyComponent<TProps, void>): React.ComponentClass<TPendingProps>
```

- dummyData: The data you want to inject into your component, accept an Object or a function that get props passed which return your dummy data
- predicate: A function that get props passed and define the loading state of your application
- styling: A function that return either an inline style object or a className that get injected into the skeleton components

- WrappedComponent: The React component that get the data injected into

#### Example
```js
import { createSkeletonProvider } from '@trainline/react-skeletor';

export default createSkeletonProvider(
  (props) => ({
    username: 'dummy_name_here'
  }),

  // Declare pending state if data is undefined
  ({ username }) => username === undefined,

  // Pass down pending style
  () => ({
    backgroundColor: 'grey',
    color: 'grey',
    borderColor: 'grey',
  })
)(Card);
```

### createSkeletonElement
Factory function which creates skeleton React components. Return a High Order Component that get props passed down

#### Signature
```ts
const createSkeletonElement = (
  type: React.ClassType<P, T, C> | string,
  pendingStyle?: React.CSSProperties | string
) => JSX.Element
```

- type: Either a Component class or a string that get passed to React.CreateElement to create your skeleton high order component

#### Example
```js
import { createSkeletonElement } from '@trainline/react-skeletor';

const SkeletonLoadingDiv = createSkeletonElement('div');

const MyStatelessComponent = ({ username }) => (
  <SkeletonLoadingDiv>{username}</SkeletonLoadingDiv>
)
```

### Div, Span, H1, H2, H3, H4, H5, P, Img
Creates a series of Html elements for you using the `createSkeletonElement` factory.

#### Signature
```ts
JSX.Element<any>
```

#### Example
```js
import { Div as SkeletonDiv } from '@trainline/react-skeletor';

const myStatelessComponent = ({ username }) => (
  <SkeletonDiv>{username}</SkeletonDiv>
)

```
