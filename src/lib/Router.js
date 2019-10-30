import React from "react";
import { Redirect } from 'react-router-dom';

const isToken = () => {
    return getToken() != null || undefined ? true:false;
}

export const getToken = () => {
    return 'fsdfas'//window.localStorage.getItem('token');
}

export const setToken = (value) => {
    window.localStorage.setItem('token',JSON.stringify(value))
}

export const Middleware = (Component) => {
    return isToken() ? <Component /> : <Redirect to="/login" />
}