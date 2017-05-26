import * as React from 'react';
import { LiveProvider, LiveEditor } from 'react-live';
import cardInlineCode from './cardInline.code';

const CardCode = () => (
  <LiveProvider code={cardInlineCode}>
    <LiveEditor contentEditable={false}/>
  </LiveProvider>
);

export default CardCode;
