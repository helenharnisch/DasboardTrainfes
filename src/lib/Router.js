import React from "react";
import { Redirect } from 'react-router-dom';

const isToken = () => {
    return true;
}

export const Middleware = (Component) => {
    return isToken() ? <Component /> : <Redirect to="/login" />
}