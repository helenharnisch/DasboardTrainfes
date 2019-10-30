import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios'
import { getToken } from './lib/Router'

axios.interceptors.request.use((config) => {
    const token = getToken();
    config.baseURL = 'https://brainfes.herokuapp.com';
    if(token != null || undefined){
        config.headers.Authentication = "Bearer " + token;    
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
