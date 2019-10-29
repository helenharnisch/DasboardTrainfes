import React, { Component } from 'react';

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
                <div className="row">
                    <div className="col-md-2 p-0">
                        <Sidebar />
                    </div>
                    <div className="col-md-10 scroll-main">
                        <Navbar titulo={"Sesiones"} />
                        <div className="col-md-11 mx-auto pt-60">
                            <Rutas />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Layout;
