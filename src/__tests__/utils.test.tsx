import React from 'react';
import { getComponentName } from '../utils';

describe('getComponentName', () => {
  let MyComponent;
  beforeEach(() => {
    MyComponent = () => <div />;
  });

  it('should default to the component displayName', () => {
    MyComponent.displayName = 'Foo';

    expect(getComponentName(MyComponent)).toEqual('Foo');
  });

  it('should fall back to the class name if displayName is empty', () => {
    expect(getComponentName(MyComponent)).toEqual('MyComponent');
  });

  it('should ultimately fall back to "SkeletorComponent"', () => {
    Object.defineProperty(MyComponent, 'name', {
      value: ''
    });

    expect(getComponentName(MyComponent)).toEqual('SkeletorComponent');
  });
});
