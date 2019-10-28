import React, { Component } from 'react';


const Login = () => (
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <form style={{width:250,margin:"100px auto"}}>
                    <input type="text" placeholder="user" className="form-control" />
                    <br /><br />
                    <input type="text" placeholder="pass" className="form-control" />
                    <br /><br />
                    <a className="btn btn-primary">Ingresar</a>
                </form>
            </div>
        </div>
    </div>
)

export default Login;