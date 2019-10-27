import React, { Component } from 'react';
import IcoWalkfes from '../../assets/img/iconModos/icon-walkfes.svg'
import IcoArow from '../../assets/img/icon/icon-arow.svg'
import {todos} from '../../todos.json';
import styles from '../../assets/css/components/Card/CardSesionStyle.css'


class CardSesion extends Component {
  constructor(){
    super();
    this.state = {
      todos
    }
  }
  render() {
    return(
      <div className="row">
          {this.state.todos.map((todo, i) => { return (
          <div className="col-md-4">
              <div className="card-trainfes">
                  <div className="row">
                      <div className="col-md-6">
                          <div className="card-body">
                              <p className="card-title mb-1">{todo.title}</p>
                              <p className="card-category m-0">{todo.category}</p>
                              <p className="card-activity mb-0">{todo.activity}</p>
                              <p className="text-black-50 m-0">{todo.name}</p>
                          </div>
                      </div>
                      <div className="col-md-3 d-flex justify-content-center p-0">
                        <img src={IcoWalkfes} className="img-fluid" alt="Icon walkfes"></img>
                      </div>
                      <div className="col-md-3 d-flex align-items-end p-0">
                        <img src={IcoArow} className="img-fluid iconArow" alt="Icon Arow"></img>
                      </div>
                  </div>
              </div>
          </div>
          ) })}
      </div>
    )
  }
}

export default CardSesion;
