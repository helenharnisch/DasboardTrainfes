import React from "react";
import Main from '../components/Main'
import CardSesion from '../components/Card/CardSesion'
import { todos } from '../todos.json';



const Maqueta = ({ }) => (
  <Main title="Modo Maqueta Walkfes">
      { todos.map((element,index) => (<CardSesion key={index} path="maqueta" titleMaqueta={element.titleMaqueta} category={element.category} activity={element.activity} id={element.id}/>)) }
  </Main>
)


export default Maqueta;
