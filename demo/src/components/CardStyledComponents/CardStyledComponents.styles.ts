/*
* Copyright (c) Trainline Limited, 2017. All rights reserved.
* See LICENSE.txt in the project root for license information.
*/

import styled from 'styled-components';
import { createSkeletonElement } from '../../../../';

export const Container = styled.div`
  display: flex;
  width: 80%;
  margin: 40px auto;
  border: 1px solid  #ddd;
`;

const loading = 'pending';

export const Name = createSkeletonElement(styled.span``, loading);

export const Avatar = createSkeletonElement(styled.img`
  display: block;
  width: 150px;
  height: 150px;
`, loading);

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
  color: #34495e;
  marginTop: 10px;
`, loading);
