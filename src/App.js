import React, { Component } from 'react';
import { Middleware } from './lib/Router'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './layouts/Login'
import Layout from './layouts/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/" component={() => Middleware(Layout)}/>
        </Switch>
      </BrowserRouter>
    );
  }
}


export default App;