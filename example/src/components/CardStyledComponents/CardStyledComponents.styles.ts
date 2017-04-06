import styled from 'styled-components';
import { createSkeletonElement } from '../../../../src/somethingify';

export const Container = styled.div`
  display: flex;
  width: 80%;
  margin: 40px auto;
  border: 1px solid  #ddd;
`;

export const Content = styled.div`
  backgroundColor: #f0f0f0;
  padding: 10px 16px;
  color: #34495e;
  fontFamily: sans-serif;
  width: calc(100% - 150px);
`;

export const Avatar = styled.img`
    display: block;
    width: 150px;
    height: 150px;
`;

export const FirstName = styled.h1`
  marginTop: 0;
  marginBottom: 10;
`;

export const LastName = styled.h3`
  margin: 0;
`;

export const Description = createSkeletonElement()(
  styled.div`
  color: #95a5a6;
  marginTop: 10px;
`);