/*
* Copyright (c) Trainline Limited, 2017. All rights reserved.
* See LICENSE.txt in the project root for license information.
*/

import * as React from 'react';
import * as PropTypes from 'prop-types';

import { createSkeletonElement } from '../createSkeletonElement';
import { mount } from 'enzyme';
import { withContext } from 'recompose';

describe('createSkeletonElement', () => {
  it('should create a span react component ', () => {
    const SpanWithContext = withContext(
      {
        skeletor: PropTypes.object
      },
      skeletor => ({
        skeletor: {
          isPending: true,
          styling: () => ({})
        }
      })
    )(createSkeletonElement('span'));

    const wrapper = mount(<SpanWithContext>Hello world</SpanWithContext>);
    expect(wrapper.find('span').at(1).text()).toBe('Hello world');
  });

  it('should merge styles from context and props', () => {
    const DivWithContext = withContext(
      {
        skeletor: PropTypes.object
      },
      skeletor => ({
        skeletor: {
          isPending: true,
          styling: () => ({ left: 0, right: 0, top: 0, bottom: 0 })
        }
      })
    )(createSkeletonElement('div'));
    const wrapper = mount(<DivWithContext style={{ position: 'absolute' }} />);

    expect(wrapper.find('div').at(1).props().style).toEqual({
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    });
  });

  it('should concatenate classname from context and props (style using function)', () => {
    const DivWithContext = withContext(
      {
        skeletor: PropTypes.object
      },
      skeletor => ({
        skeletor: {
          isPending: true,
          styling: () => 'helloWorld'
        }
      })
    )(createSkeletonElement('div'));
    const wrapper = mount(<DivWithContext className="anotherHelloWorld" />);

    expect(wrapper.find('div').at(1).props().className).toEqual(
      'anotherHelloWorld helloWorld'
    );
  });

  it('should concatenate classname from context and props', () => {
    const DivWithContext = withContext(
      {
        skeletor: PropTypes.object
      },
      skeletor => ({
        skeletor: {
          isPending: true,
          styling: 'helloWorld'
        }
      })
    )(createSkeletonElement('div'));
    const wrapper = mount(<DivWithContext className="anotherHelloWorld" />);

    expect(wrapper.find('div').at(1).props().className).toEqual(
      'anotherHelloWorld helloWorld'
    );
  });

  it('should accept inline style object', () => {
    const DivWithContext = withContext(
      {
        skeletor: PropTypes.object
      },
      skeletor => ({
        skeletor: {
          isPending: true
        }
      })
    )(createSkeletonElement('div', { backgroundColor: 'black' }));
    const wrapper = mount(<DivWithContext />);

    expect(wrapper.find('div').at(1).props().style).toEqual({
      backgroundColor: 'black'
    });
  });

  it('should accept classname', () => {
    const DivWithContext = withContext(
      {
        skeletor: PropTypes.object
      },
      skeletor => ({
        skeletor: {
          isPending: true
        }
      })
    )(createSkeletonElement('div', 'aClassName'));
    const wrapper = mount(<DivWithContext />);

    expect(wrapper.find('div').at(1).props().className).toEqual('aClassName');
  });

  it('should accept function to style', () => {
    const DivWithContext = withContext(
      {
        skeletor: PropTypes.object
      },
      skeletor => ({
        skeletor: {
          isPending: true
        }
      })
    )(createSkeletonElement('div', () => 'aClassName'));
    const wrapper = mount(<DivWithContext />);

    expect(wrapper.find('div').at(1).props().className).toEqual('aClassName');
  });

  it('should merge style from context and props', () => {
    const DivWithContext = withContext(
      {
        skeletor: PropTypes.object
      },
      skeletor => ({
        skeletor: {
          isPending: true,
          styling: { color: 'grey' }
        }
      })
    )(createSkeletonElement('div', { backgroundColor: 'grey' }));
    const wrapper = mount(<DivWithContext />);

    expect(wrapper.find('div').at(1).props().style).toEqual({
      color: 'grey',
      backgroundColor: 'grey'
    });
  });

  it('should be hidden from any assistive technology', () => {
    const DivWithContext = withContext(
      {
        skeletor: PropTypes.object
      },
      skeletor => ({
        skeletor: {
          isPending: true
        }
      })
    )(createSkeletonElement('div'));
    const wrapper = mount(<DivWithContext />);

    expect(wrapper.find('div').at(1).props()['aria-hidden']).toEqual(true);
  });

  it('should attach a displayName', () => {
    const Comp: React.StatelessComponent = () => <div />;
    expect(createSkeletonElement(Comp).displayName).toBe('Comp');

    const CompWithDisplayName: React.StatelessComponent = () => <div />;
    CompWithDisplayName.displayName = 'ParagraphComp';
    expect(createSkeletonElement(CompWithDisplayName).displayName).toBe(
      'ParagraphComp'
    );

    expect(createSkeletonElement('div').displayName).toBe('div');

    expect(createSkeletonElement(() => <div />).displayName).toBe(
      'SkeletorComponent'
    );
  });
});
