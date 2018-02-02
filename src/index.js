// react
import React from 'react';
import ReactDOM from 'react-dom';

//redux
import {
  Provider
} from 'react-redux';
import createStore from './redux/store/index';

import { Routes } from './router/routes';
import './styles/style.css';


const rootEl = document.getElementById('root');
const render = () => {
  ReactDOM.render((
    <Provider store={createStore()}>
      <Routes/>
    </Provider>
  ), rootEl);
};

render();
