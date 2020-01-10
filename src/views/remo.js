import React from "react";
import Main from '../components/Main';
import CardSesion from '../components/Card/CardSesion';
import IcoRemo from '../assets/img/iconModos/icon-remo.svg';
import { todos } from '../todos.json';



const Remo = ({ }) => (
    <Main title="Modo Remo">
        { todos.map((element,index) => (<CardSesion key={index} path="remo" titleMaqueta={element.titleMaqueta} category={element.category} imgModes={IcoRemo} activity={element.activity} id={element.id}/>)) }
    </Main>
)



export default Remo;
