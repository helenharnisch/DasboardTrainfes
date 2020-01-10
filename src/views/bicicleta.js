import React from "react";
import Main from '../components/Main';
import CardSesion from '../components/Card/CardSesion'
import IcoBicicleta from '../assets/img/iconModos/icon-bicicleta.svg'
import { todos } from '../todos.json';



const Bicicleta = ({ }) => (
    <Main title="Modo Bicicleta">
        { todos.map((element,index) => (<CardSesion key={index} path="bicicleta" titleMaqueta={element.titleMaqueta} category={element.category} imgModes={IcoBicicleta} activity={element.activity} id={element.id}/>)) }
    </Main>
)


export default Bicicleta;
