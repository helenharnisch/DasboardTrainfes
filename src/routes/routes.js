import React, {Fragment} from 'react'
import {Route} from 'react-router-dom'
// VIEWS
import Dashboard from '../views/dashboard';
import Walkfes from '../views/wallfes';
import Sensor from '../views/sensor';
import SesionDetails from '../views/sesionDetails'

const Rutas = () => (
    <Fragment>
        <Route exact path="/" component={Dashboard}></Route>
        <Route exact path="/walkfes" component={Walkfes}></Route>
        <Route exact path="/walkfes/:id" component={SesionDetails}></Route>
        <Route exact path="/sensor" component={Sensor}></Route>
    </Fragment>
)


export default Rutas;
