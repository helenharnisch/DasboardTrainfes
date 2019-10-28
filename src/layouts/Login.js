import React, { Component } from 'react';
import CustomButtons from '../components/CustomButtons.js'
import styles from '../assets/css/LoginStyle.css'

import IcoFace from '../assets/img/iconSocial/icon-facebook.svg'
import IcoInsta from '../assets/img/iconSocial/icon-instagram.svg'
import IcoLink from '../assets/img/iconSocial/icon-linkedin.svg'



const Login = () => (
    <div className="container">
        <div className="row d-flex justify-content-center align-items-center mt-5">
            <div className="col-md-3 col-sm-3 welcome d-flex justify-content-center align-items-center shadow-lg">
                <div className="text-center">
                    <h1 className="text-white">Bienvenidos</h1>
                    <p className="text-white fw-200">Lorem ipsum dolor sit amet consectetur adipiscing</p>
                </div>
            </div>
            <div className="col-md-5 col-sm-5 form-login text-center shadow-lg">
              <h3 className="text-trainfes mt-5">Inicio Sesión</h3>
              <div className="mb-4">
                <img src={IcoFace} className="img-fluid p-2" alt="Icon Facebook"></img>
                <img src={IcoInsta} className="img-fluid p-2" alt="Icon Instagram"></img>
                <img src={IcoLink} className="img-fluid p-2" alt="Icon Linkedin"></img>
              </div>
                <form className="form mx-auto">
                    <input type="text" placeholder="Email" className="input-text" />
                    <br /><br />
                    <input type="text" placeholder="Contraseña" className="input-text" />
                    <br /><br />
                    <CustomButtons className="btn-trainfes-primary" button={"ENTRAR"} />
                </form>
            </div>
        </div>
    </div>

)

export default Login;
