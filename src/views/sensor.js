import React from "react";
import Main from '../components/Main'
import CardSesion from '../components/Card/CardSesion'
import { todos } from '../todos.json';

const Sensor = ({ }) => (
    <Main title="Modo Sensor">
        { todos.map((element,index) => (<CardSesion key={index} path="sensor" titleMaqueta={element.titleMaqueta} category={element.category} activity={element.activity} id={element.id}/>)) }
    </Main>
)


export default Sensor;
