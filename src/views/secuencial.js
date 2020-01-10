import React from "react";
import Main from '../components/Main'
import CardSesion from '../components/Card/CardSesion'
import IcoSecuencial from '../assets/img/iconModos/icon-secuencial.svg'
import { todos } from '../todos.json';


const Secuencial = ({ }) => (
    <Main title="Modo Secuencial">
        { todos.map((element,index) => (<CardSesion key={index} path="secuencial" titleMaqueta={element.titleMaqueta} category={element.category} imgModes={IcoSecuencial} activity={element.activity} id={element.id}/>)) }
    </Main>
)


export default Secuencial;
