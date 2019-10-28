import React from "react";
import Layout from './layouts/Layout';
import Dashboard from './views/dashboard';
import Other from './views/other'

export default [
    {
        path:'/',
        auth: true,
        exact: false,
        Component: Layout
    }
]