import React, { Component } from 'react';
import IcoWalkfesTwo from '../../assets/img/iconModos/icon-walkfes-two.svg'
import IcoCheckMark from '../../assets/img/icon/icon-check-mark.svg'
import '../../assets/css/components/Card/CardSesionStyle.css'
import '../../assets/css/components/Card/CardLastSessionStyle.css'


class CardReviewSession extends Component {
  constructor() {
    super();
  }

  render() {
    const {title,category,activity,name,imgModes,id} = this.props;
    return (
      <div className="row">
          <div className="col-md-7">
            <div className="card-body">
              <p className="card-title-session-maqueta mb-0">{ this.props.title }</p>
              <p className="card-category m-0">{ this.props.category }<span><img src={IcoCheckMark} className="img-fluid mx-2" alt="Icon Check Mar"></img></span></p>
              <p className="card-activity mb-0">{ this.props.activity }</p>
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
            <img src={this.props.imgModes} className="img-fluid" alt=""></img>
          </div>
      </div>
    )
  }
}

export default CardReviewSession;
