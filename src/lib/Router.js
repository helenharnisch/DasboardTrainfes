import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from '../layouts/Login'

const isToken = () => {
    return true;
}

const Ruta = ({ exact, path, Component, auth, children }) => (<Route exact={exact} path={path} component={() => auth ? isToken() ? <Component /> : <Redirect to="/login" /> : <Component />}>{children}</Route>)

const Router = ({ routes }) => {
    console.log(routes)
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={Login} />
                {routes.map((r, i) => <Ruta key={i} exact={r.exact} path={r.path} Component={() => r.auth ? isToken() ? <r.Component /> : <Redirect to="/login" /> : <r.Component />}></Ruta>)}
            </Switch>
        </BrowserRouter>
    )
}


export default Router


{/* <RutaMap key={i} exact={r.exact} path={r.path} Component={r.component} auth={r.auth} child={r.children}/> */ }