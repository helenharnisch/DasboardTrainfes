import React, {Fragment} from 'react'
import {Route} from 'react-router-dom'
// VIEWS
import Dashboard from '../views/dashboard';
import Walkfes from '../views/wallfes';
import Secuencial from '../views/secuencial';
import Sensor from '../views/sensor';
import Bicicleta from '../views/bicicleta';
import Remo from '../views/remo';
import SesionDetails from '../views/sesionDetails'

const Rutas = () => (
    <Fragment>
        <Route exact path="/" component={Dashboard}></Route>
        <Route exact path="/walkfes" component={Walkfes}></Route>
        <Route exact path="/walkfes/:id" component={SesionDetails}></Route>
        <Route exact path="/secuencial" component={Secuencial}></Route>
        <Route exact path="/sensor" component={Sensor}></Route>
        <Route exact path="/bicicleta" component={Bicicleta}></Route>
        <Route exact path="/remo" component={Remo}></Route>
    </Fragment>
)


export default Rutas;
