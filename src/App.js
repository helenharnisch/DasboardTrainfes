import React, { Component } from 'react';
import './App.css';

import Routes from './Routes'
import Router from './lib/Router'

import { BrowserRouter } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Router routes={Routes}/>
      </BrowserRouter>
    );
  }
}


export default App;