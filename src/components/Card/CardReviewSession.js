import React, { Component } from 'react';
import IcoWalkfes from '../../assets/img/iconModos/icon-walkfes.svg'
import '../../assets/css/components/Card/CardSesionStyle.css'
import '../../assets/css/components/Card/CardLastSessionStyle.css'


class CardReviewSession extends Component {
  constructor() {
    super();
  }

  render() {
    const {title,category,activity,name,id} = this.props;
    return (


          <div className="row">
            <div className="col-md-6">
              <div className="card-body">
                <p className="card-title mb-1">{ this.props.title }</p>
                <p className="card-category m-0">{ this.props.category }</p>
                <p className="card-activity mb-0">{ this.props.activity }</p>
                <p className="text-black-50 m-0">{ this.props.name }</p>
              </div>
            </div>
            <div className="col-md-5 d-flex justify-content-center p-0">
              <img src={IcoWalkfes} className="img-fluid img-CardLastSession" alt="Icon walkfes"></img>
            </div>
            <div className="col-md-3 d-flex align-items-end p-0">
            </div>
          </div>


    )
  }
}

export default CardReviewSession;
