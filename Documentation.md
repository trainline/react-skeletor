### createSkeletonProvider
High Order Function which defines the loading state of your app and inject the dummy data to your children components.

#### Signature
```ts
const createSkeletonProvider = <U>(
  dummyData: Partial<U> | ((props: Partial<U>) => Partial<U>),
  predicate: (props: Partial<U>) => boolean,
  styling?: (() => (React.CSSProperties | string)) | string | React.CSSProperties,
) => <T extends Partial<U>>(WrappedComponent: React.SFC<T>): React.ComponentClass<T>
```

- dummyData: The data you want to inject into your component, accept an Object or a function that get props passed and return your dummy data
- predicate: A function that get props passed and define the loading state of your application
- styling: A function that return either an inline style object or a className that get injected into the skeleton components your loading state is pending

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
const createSkeletonElement = <T>(
  type: React.SFC<T> | string,
  pendingStyle?: (() => (React.CSSProperties | string)) | string | React.CSSProperties
) => React.StatelessComponent<T>
```

- type: Either a Component class or a string that get passed to React.CreateElement to create your skeleton high order component
- pendingStyle: the style applied to the single element when your app loading state is pending

#### Example
```jsx
import { createSkeletonElement } from '@trainline/react-skeletor';

const SkeletonLoadingDiv = createSkeletonElement('div');

const MyStatelessComponent = ({ username }) => (
  <SkeletonLoadingDiv>{username}</SkeletonLoadingDiv>
)
```
