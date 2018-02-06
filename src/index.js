import React from 'react';
import ReactDOM from 'react-dom';
import Route from './routes';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from './store/store';
import initialState from './reducers/initialState';
import * as actionType from './actions/ActionTypes';
import 'antd/dist/antd.css';

const store = configureStore();
store.dispatch({ type: actionType.INIT });
console.log(store);


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Route />
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
