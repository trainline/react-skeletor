/*
* Copyright (c) Trainline Limited, 2017. All rights reserved.
* See LICENSE.txt in the project root for license information.
*/
import { StyleSheet } from 'aphrodite/no-important';

const skeletonAnimation = {
  '0%': {
    opacity: 0.8
  },
  '50%': {
    opacity: 0.4
  },
  '100%': {
    opacity: 0.8
  }
};

export default StyleSheet.create({
  container: {
    display: 'flex',
    margin: 'auto',
    border: '1px solid  #ddd',
    borderRadius: '5px'
  },
  avatar: {
    display: 'block',
    width: '150px',
    height: '150px',
  },
  content: {
    backgroundColor: '#f0f0f0',
    padding: '10px 16px',
    color: '#34495e',
    fontFamily: 'system-ui, sans-serif',
    width: 'calc(100% - 150px)'
  },
  firstName: {
    marginTop: 0,
    marginBottom: 10,
  },
  lastName: {
    margin: 0,
  },
  description: {
    color: '#34495e',
    marginTop: 10,
  },
  pending: {
    backgroundColor: '#bdc3c7',
    color: '#bdc3c7',
    userSelect: 'none',
    animationName: [skeletonAnimation],
    animationDuration: '1.5s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear'
  }
});
