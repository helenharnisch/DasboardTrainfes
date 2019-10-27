import React, { Component } from 'react';
import styles from '../assets/css/components/SidebarStyle.css'

class Sidebar extends Component {
  render() {
    return (

      <nav className="d-none d-md-block bg-white sidebar nav-trainfes shadow-trainfes">
        <div className="circle-outer"><div className="circle-inner"></div></div>
          <div className="sidebar-trainfes sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item border-bottom">
                <a className="nav-link" href="#">
                  Dashboard <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item border-bottom">
                <a className="nav-link active" href="#">
                  Modos
                </a>
              </li>
            </ul>
          </div>
      </nav>

    )
  }
}

export default Sidebar;
