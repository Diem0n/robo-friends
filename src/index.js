import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'tachyons'
import App from './containers/App'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import { searchRobots } from './reducers';
const store = createStore(searchRobots)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
        <App />
    </Provider>
  </React.StrictMode>
);


