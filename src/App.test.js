import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import table from './data/table-1'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App table={table} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
