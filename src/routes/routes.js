import React, {Fragment} from 'react'
import {Route} from 'react-router-dom'
// VIEWS
import Dashboard from '../views/dashboard';
import Walkfes from '../views/wallfes';
import SesionDetails from '../views/sesionDetails'

const Rutas = () => (
    <Fragment>
        <Route exact path="/" component={Dashboard}></Route>
        <Route exact path="/walkfes" component={Walkfes}></Route>
        <Route exact path="/walkfes/:id" component={SesionDetails}></Route>
    </Fragment>
)


export default Rutas;