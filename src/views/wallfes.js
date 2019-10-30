import React from "react";
import Main from '../components/Main'
import CardSesion from '../components/Card/CardSesion'
import CardLastSession from '../components/Card/CardLastSession'
import { todos } from '../todos.json';
console.log(todos)
const Other = ({ }) => (
    <Main title="Modo Walkfes">
        { todos.map((element,index) => (<CardSesion key={index} title={element.title} category={element.category} activity={element.activity} name={element.name} id={element.id}/>)) }
    </Main>
)


export default Other;
