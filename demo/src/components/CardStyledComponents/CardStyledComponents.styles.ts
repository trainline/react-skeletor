/*
* Copyright (c) Trainline Limited, 2017. All rights reserved.
* See LICENSE.txt in the project root for license information.
*/

import styled from 'styled-components';
import { createSkeletonElement } from '../../../../';

export const Container = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 1px solid  #ddd;
  border-radius: 5px;
`;

// loading Classname defined in index.ejs of the project
const loading = 'pending';

export const Title = createSkeletonElement(styled.h1`
  marginTop: 0;
  marginBottom: 10;
` as any, loading);

export const Avatar = createSkeletonElement(styled.img`
  display: block;
  width: 150px;
  height: 150px;
` as any, loading);

export const Content = styled.div`
  backgroundColor: #f0f0f0;
  padding: 10px 16px;
  color: #34495e;
  fontFamily: sans-serif;
  width: calc(100% - 150px);
`;

export const Description = createSkeletonElement(styled.div`
  color: #34495e;
  marginTop: 10px;
` as any, loading);
