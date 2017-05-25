import styled from 'styled-components';
import { createSkeletonElement } from 'react-skeletor';

export const Container = styled.div`
  display: flex;
  width: 80%;
  margin: 40px auto;
  border: 1px solid  #ddd;
`;

export const Name = createSkeletonElement(styled.span`
  animation-name: skeletonAnimation;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`);

export const Avatar = createSkeletonElement(styled.img`
  display: block;
  width: 150px;
  height: 150px;
  animation-name: skeletonAnimation;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`);

export const Content = styled.div`
  backgroundColor: #f0f0f0;
  padding: 10px 16px;
  color: #34495e;
  fontFamily: sans-serif;
  width: calc(100% - 150px);
`;

export const FirstName = styled.h1`
  marginTop: 0;
  marginBottom: 10;
`;

export const LastName = styled.h3`
  margin: 0;
`;

export const Description = createSkeletonElement(styled.div`
  color: #95a5a6;
  marginTop: 10px;
  animation-name: skeletonAnimation;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`);
