import React, { Component } from 'react';
import '../assets/css/components/SidebarStyle.css'
import { Link } from 'react-router-dom'
import ListDown from './ListDown'
class Sidebar extends Component {
  render() {
    return (

      <nav className="d-none d-md-block bg-white sidebar nav-trainfes shadow-trainfes">
        <div className="circle-outer"><div className="circle-inner"></div></div>
        <div className="sidebar-trainfes sidebar-sticky">
          <ul className="nav flex-column">
            <li className="nav-item border-bottom">
              <Link className="nav-link" to="/">Dashboard</Link>
            </li>
            <li className="nav-item border-bottom">
              <ListDown title="Modos" open={false}>
                <ul>
                  <li>
                    <Link to="/walkfes" className="nav-link active">Walkfes</Link>
                  </li>
                </ul>
              </ListDown>
            </li>
          </ul>
        </div>
      </nav>

    )
  }
}

export default Sidebar;
