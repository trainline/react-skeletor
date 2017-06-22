/*
* Copyright (c) Trainline Limited, 2017. All rights reserved.
* See LICENSE.txt in the project root for license information.
*/

import * as React from 'react';
import { LiveProvider, LiveEditor } from 'react-live';
import cardInlineCode from './cardInline.code';
import styled from 'styled-components';

// tslint:disable-next-line
const StyledProvider: any = styled(LiveProvider as any)`
 width: 50%;
 margin: auto;
`;

// tslint:disable-next-line:no-any
const Editor = LiveEditor as any;

const CardCode = () => (
  <StyledProvider code={cardInlineCode}>
    <Editor contentEditable={false}/>
  </StyledProvider>
);

export default CardCode;
