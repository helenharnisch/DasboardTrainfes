import React, { Component } from 'react';
import '../assets/css/components/SidebarStyle.css'
import { Link } from 'react-router-dom'
import ListDown from './ListDown'
import IcoDropdown from '../assets/img/icon/icon-dropdown-toggle.svg'
class Sidebar extends Component {
  render() {
    return (

      <nav className="d-none d-md-block bg-white sidebar nav-trainfes shadow-trainfes">
        <div className="circle-outer d-flex justify-content-center d-flex align-items-center"><div className="circle-inner d-flex justify-content-center d-flex align-items-center"><span className="text-trainfes font-weight-bold">L.V</span></div></div>
        <p className="text-center my-3 text-grey-05">Hola, Luis Vilches<span><a href="#"><img src={IcoDropdown} className="img-fluid mx-3" alt="Icon Dropdown Toggle"></img></a></span></p>
        <div className="sidebar-trainfes sidebar-sticky">
          <ul className="nav flex-column">
            <li className="nav-item border-bottom">
              <Link className="nav-link" to="/">Dashboard</Link>
            </li>
            <li className="nav-item border-bottom">
              <ListDown title="Modos" className="nav-link" open={false}>
                <Link to="/walkfes" className="nav-link">Walkfes</Link>
                <Link to="/secuencial" className="nav-link">Secuencial</Link>
                <Link to="/sensor" className="nav-link">Sensor</Link>
                <Link to="/bicicleta" className="nav-link">Bicicleta</Link>
                <Link to="/remo" className="nav-link">Remo</Link>
              </ListDown>
            </li>
          </ul>
        </div>
      </nav>

    )
  }
}

export default Sidebar;
