/*
* Copyright (c) Trainline Limited, 2017. All rights reserved.
* See LICENSE.txt in the project root for license information.
*/

import * as React from 'react';
import { LiveProvider, LiveEditor, LivePreview, LiveError } from 'react-live';
import cardInlineCode from './cardInline.code';
import styled from 'styled-components';
import { createSkeletonProvider, createSkeletonElement } from '../../../';
import { mint } from '../colors';

const StyledProvider = styled(LiveProvider)`
  margin: auto;
  display: flex;
  justify-content: center;
`;

const StyledEditor = styled(LiveEditor)`
  font-family: 'Source Code Pro', monospace;
  font-size: 13px;
  line-height: 18px;
` as any; // tslint:disable-line:no-any

const StyledPreview = styled(LivePreview)`
  flex: 1;
  background-color: ${mint};
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
`;

const CardCode = () => (
  <StyledProvider
    mountStylesheet={false}
    noInline={true}
    code={cardInlineCode}
    scope={{ createSkeletonElement, createSkeletonProvider, Container }}
  >
    <StyledEditor contentEditable={false}/>
    <StyledPreview/>
    <LiveError/>
  </StyledProvider>
);

export default CardCode;
