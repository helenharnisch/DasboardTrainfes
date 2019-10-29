import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import IcoWalkfes from '../../assets/img/iconModos/icon-walkfes.svg'
import IcoArow from '../../assets/img/icon/icon-arow.svg'
import '../../assets/css/components/Card/CardSesionStyle.css'


class CardSesion extends Component {
  constructor() {
    super();
  }

  render() {
    const {title,category,activity,name,id} = this.props;
    return (
      <div className="col-md-4">
        <Link to={"/walkfes/"+id} className="card-trainfes">
          <div className="row">
            <div className="col-md-6">
              <div className="card-body">
                <p className="card-title mb-1">{title}</p>
                <p className="card-category m-0">{category}</p>
                <p className="card-activity mb-0">{activity}</p>
                <p className="text-black-50 m-0">{name}</p>
              </div>
            </div>
            <div className="col-md-3 d-flex justify-content-center p-0">
              <img src={IcoWalkfes} className="img-fluid" alt="Icon walkfes"></img>
            </div>
            <div className="col-md-3 d-flex align-items-end p-0">
              
                
              
              <img src={IcoArow} className="img-fluid iconArow" alt="Icon Arow"></img>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}

export default CardSesion;
