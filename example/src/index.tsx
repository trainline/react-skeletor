import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { pendify } from 'react-pendifier';

const Message = pendify(
  () => (<div>Message</div>)
);

const rootEl = document.getElementById('root');

function render() {
  ReactDOM.render(
    <div>
      <Message />
    </div>,
    rootEl
  );
}

render();