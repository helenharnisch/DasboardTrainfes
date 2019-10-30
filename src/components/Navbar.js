import React, { Component } from 'react';
import styles from '../assets/css/components/NavbarStyle.css'

class Navbar extends Component {
  render() {
    return (

      <nav className="navbar navbar-light fixed-top bg-white flex-md-nowrap">
        <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#"></a>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <a className="nav-link" href="#"></a>
          </li>
        </ul>
        <input className="search col-sm-4 col-md-3 px-3" type="text" placeholder="Buscar" aria-label="Buscar"/>
      </nav>
    )
  }
}

export default Navbar;
