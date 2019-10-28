import React, { Component } from 'react';
import Router from '../lib/Router'
import Routes from '../Routes'
import Login from '../layouts/Login'
//Componentes
import Navbar from '../components/Navbar.js';
import Sidebar from '../components/Sidebar.js';
import CardSesion from '../components/Card/CardSesion.js';
//Datos
import { todos } from '../todos.json';

const Route = () => Routes.find(e => e.path === '/');

class Layout extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 p-0">
                        <Sidebar />
                    </div>
                    <div className="col-md-10 scroll-main">
                        <Navbar titulo={"Sesiones"} />
                        <div className="col-md-11 mx-auto pt-60">
                            {/* <CardSesion>{todos}</CardSesion> */}
                            <p>Acá van las rutas</p>
                            {/* <Router routes={Route().subRoutes} /> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Layout;