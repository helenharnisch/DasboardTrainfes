import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { getToken } from './lib/Router'
import axios from 'axios'


axios.interceptors.request.use(async (config) => {
    const token = `Bearer ${eval(await getToken())}`;
    config.baseURL = 'https://brainfes.herokuapp.com/v1';
    config.headers.Authorization = token;
    console.log(config)
    return config;
}, (error) => {
    return Promise.reject(error);
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
