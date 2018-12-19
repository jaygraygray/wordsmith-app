import * as React from 'react';
import { render } from 'react-dom';

const App = () => {
  return (
    <div>Oh hai</div>
  )
}

const makeRoot = () => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  return div;
};

const root = makeRoot();

render(<App />, root);