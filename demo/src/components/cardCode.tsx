import * as React from 'react';
import { LiveProvider, LiveEditor } from 'react-live';
import cardInlineCode from './cardInline.code';
import styled from 'styled-components';

// tslint:disable-next-line
const StyledProvider: any = styled(LiveProvider as any)`
 width: 50%;
 margin: auto;
`;

const CardCode = () => (
  <StyledProvider code={cardInlineCode}>
    <LiveEditor contentEditable={false}/>
  </StyledProvider>
);

export default CardCode;
