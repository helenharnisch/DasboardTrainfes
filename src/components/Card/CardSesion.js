import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import IcoArow from '../../assets/img/icon/icon-arow.svg'
import IcoCheckMark from '../../assets/img/icon/icon-check-mark.svg'
import CardTrainfes from './CardTrainfes.js'
import '../../assets/css/components/Card/CardSesionStyle.css'


class CardSesion extends Component {
  constructor() {
    super();
  }

  async componentDidMount(){

  }

  render() {
    const {title,titleMaqueta,category,activity,imgModes,id,session,path} = this.props;
    return (
      <div className="col-md-4">
      <CardTrainfes>
        <Link to={{pathname: "/"+path+"/"+id,session:title}} >
          <div className="row">
            <div className="col-md-7">
              <div className="card-body">
                <p className="card-title-session mb-1">{title}</p>
                <p className="card-title-session-maqueta mb-1">{titleMaqueta}</p>
                <p className="card-category m-0">{category}<span><img src={IcoCheckMark} className="img-fluid mx-2" alt="Icon Check Mar"></img></span></p>
                <p className="card-activity mb-0">{activity}</p>
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
            <div className="col-md-3 d-flex justify-content-center p-0">
              <img src={this.props.imgModes} className="img-fluid" alt=""></img>
            </div>
            <div className="col-md-2 d-flex align-items-end p-0">
            <img src={IcoArow} className="img-fluid iconArow" alt="Icon Arow"></img>
            </div>
          </div>
        </Link>
        </CardTrainfes>
      </div>
    )
  }
}

export default CardSesion;
