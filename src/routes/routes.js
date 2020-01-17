import React, {Fragment} from 'react'
import {Route} from 'react-router-dom'
// VIEWS
import Dashboard from '../views/dashboard';
import Walkfes from '../views/wallfes';
import SesionDetailsWalkfes from '../views/sesionDetailsWalkfes'
import Secuencial from '../views/secuencial';
import SesionDetailsSecuencial from '../views/sesionDetailsSecuencial';
import Sensor from '../views/sensor';
import SesionDetailsSensor from '../views/sesionDetailsSensor';
import Bicicleta from '../views/bicicleta';
import SesionDetailsBicicleta from '../views/sesionDetailsBicicleta';
import Remo from '../views/remo';
import SesionDetailsRemo from '../views/sesionDetailsRemo';
import Cuenta from '../views/cuenta';


const Rutas = () => (
    <Fragment>
        <Route exact path="/" component={Dashboard}></Route>
        <Route exact path="/walkfes" component={Walkfes}></Route>
        <Route exact path="/walkfes/:id" component={SesionDetailsWalkfes}></Route>
        <Route exact path="/secuencial" component={Secuencial}></Route>
        <Route exact path="/secuencial/:id" component={SesionDetailsSecuencial}></Route>
        <Route exact path="/sensor" component={Sensor}></Route>
        <Route exact path="/sensor/:id" component={SesionDetailsSensor}></Route>
        <Route exact path="/bicicleta" component={Bicicleta}></Route>
        <Route exact path="/bicicleta/:id" component={SesionDetailsBicicleta}></Route>
        <Route exact path="/remo" component={Remo}></Route>
        <Route exact path="/remo/:id" component={SesionDetailsRemo}></Route>
        <Route exact path="/cuenta" component={Cuenta}></Route>
    </Fragment>
)


export default Rutas;
