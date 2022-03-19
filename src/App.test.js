import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import table from './data/useFetchTables'
import {Provider} from "react-redux";
import store from "./redux/store";
import tableDefault from "./data/useFetchTables";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <Provider store={store}>
        <App table={tableDefault} />,
      </Provider>,
      div);
  ReactDOM.unmountComponentAtNode(div);
});
