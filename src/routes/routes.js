import React, {Fragment} from 'react'
import {Route} from 'react-router-dom'
// VIEWS
import Dashboard from '../views/dashboard';
import Walkfes from '../views/wallfes';
import SesionDetailsWalkfes from '../views/sesionDetailsWalkfes'
import Secuencial from '../views/secuencial';
import Sensor from '../views/sensor';
import SesionDetailsSensor from '../views/sesionDetailsSensor';
import Bicicleta from '../views/bicicleta';
import Remo from '../views/remo';
import Maqueta from '../views/maqueta'
import MaquetaDetails from '../views/maquetaDetails';

const Rutas = () => (
    <Fragment>
        <Route exact path="/" component={Dashboard}></Route>
        <Route exact path="/walkfes" component={Walkfes}></Route>
        <Route exact path="/walkfes/:id" component={SesionDetailsWalkfes}></Route>
        <Route exact path="/maqueta" component={Maqueta}></Route>
        <Route exact path="/maqueta/:id" component={MaquetaDetails}></Route>
        <Route exact path="/secuencial" component={Secuencial}></Route>
        <Route exact path="/sensor" component={Sensor}></Route>
        <Route exact path="/sensor/:id" component={SesionDetailsSensor}></Route>
        <Route exact path="/bicicleta" component={Bicicleta}></Route>
        <Route exact path="/remo" component={Remo}></Route>
    </Fragment>
)


export default Rutas;
