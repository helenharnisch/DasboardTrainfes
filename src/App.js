import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//Componentes

import Navbar from './components/Navbar.js';
import Sidebar from './components/Sidebar.js';
import CardSesion from './components/Card/CardSesion.js';
//Datos
import {todos} from './todos.json';

class App extends Component {

  render() {
    return (

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 p-0">
          <Sidebar/>
          </div>
          <div className="col-md-10 scroll-main">
          <Navbar titulo={"Sesiones"}/>
            <div className="col-md-11 mx-auto pt-60">
            <CardSesion>{ todos }</CardSesion>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
