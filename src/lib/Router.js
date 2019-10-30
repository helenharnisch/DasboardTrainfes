import React from "react";
import { Redirect } from 'react-router-dom';
import { encode, decode } from 'jwt-simple';
const apiKeySecret = 'trainfes20192019';

const isToken = () => {
    return getToken() != null || undefined ? true : false;
}

export const getToken = () => {
    return window.localStorage.getItem('token');
}

export const setToken = (value) => {
    window.localStorage.setItem('token', JSON.stringify(value))
}

export const Middleware = (Component) => {
    return isToken() ? <Component /> : <Redirect to="/login" />
}

export const getUserId = () => {
    const token = eval(getToken());
    const payload = decode(token,apiKeySecret);
    return payload.id;
}