import React, { Component } from 'react';
import './../index.css';
// Componentes
import Navbar from '../components/Navbar.js';
import Sidebar from '../components/Sidebar.js';

import Rutas from '../routes/routes'

class Layout extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row scroll-row">
                    <div className="col-md-2 p-0">
                        <Sidebar />
                    </div>
                    <div className="col-md-10 scroll-main bg-light">
                        <Navbar titulo={"Sesiones"} />
                        <div className="col-md-12 mx-auto pt-60">
                            <Rutas />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Layout;
