/*eslint-disable import/default*/
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import routes from './routes';
import { Router, browserHistory } from 'react-router';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import { Provider } from 'react-redux';
import { loadCourses } from './actions/courseActions';
import { loadAuthors} from './actions/authorActions';
import configureStore from './store/configureStore.dev';
import "../node_modules/toastr/build/toastr.min.css";

/**
 * initialize the store
 * */
const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById("app")
);
