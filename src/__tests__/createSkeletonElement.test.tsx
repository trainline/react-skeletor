import * as React from 'react';
import * as PropTypes from 'prop-types';

import { createSkeletonElement } from '../createSkeletonElement';
import { mount } from 'enzyme';
import { withContext } from 'recompose';

describe('createSkeletonElement', () => {
  it('should create a span react component ', () => {
    const SpanWithContext = withContext({
      skeletor: PropTypes.object
    }, (skeletor) => ({
      skeletor: {
        isPending: true,
        styling: {}
      }
    }))(createSkeletonElement('span'));

    const wrapper = mount(<SpanWithContext>Hello world</SpanWithContext>);
    expect(wrapper.find('span').text()).toBe('Hello world');
  });

  it('should merge styles from context and props', () => {
    const DivWithContext = withContext({
      skeletor: PropTypes.object
    }, (skeletor) => ({
      skeletor: {
        isPending: true,
        styling: {
          style: { left: 0, right: 0, top: 0, bottom: 0 }
        }
      }
    }))(createSkeletonElement('div'));
    const wrapper = mount(<DivWithContext style={{ position: 'absolute' }}/>);

    expect(wrapper.find('div').props().style).toEqual({
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    });
  });

  it('should concatenate classname from context and props', () => {
    const DivWithContext = withContext({
      skeletor: PropTypes.object
    }, (skeletor) => ({
      skeletor: {
        isPending: true,
        styling: {
          className: 'helloWorld'
        }
      }
    }))(createSkeletonElement('div'));
    const wrapper = mount(<DivWithContext className="anotherHelloWorld"/>);

    expect(wrapper.find('div').props().className).toEqual('anotherHelloWorld helloWorld');
  });
});