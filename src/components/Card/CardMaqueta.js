import React, { Component } from 'react';
import IcoWalkfesTwo from '../../assets/img/iconModos/icon-walkfes-two.svg'



class CardMaqueta extends Component {
  render() {
    return (
      <div className="row">
          <div className="col-md-7">
            <div className="card-body">
              <p className="card-title-session-maqueta mb-0">Anterior Sesión</p>
              <p className="card-category m-0">Total pasos</p>
              <p className="card-activity mb-0">340</p>
            </div>
            <table class="table-date">
              <thead>
                <tr>
                  <th scope="col">Fecha</th>
                  <th scope="col">Min. Activo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>7-10-2018</td>
                  <td className="text-center">60</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-4 d-flex justify-content-center p-0">
            <img src={IcoWalkfesTwo} className="img-fluid" alt="Icon walkfes"></img>
          </div>
      </div>
    )
  }
}

export default CardMaqueta;
