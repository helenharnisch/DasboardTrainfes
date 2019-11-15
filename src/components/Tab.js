import React, { Component } from 'react';
import styles from '../assets/css/components/NavbarStyle.css'
import Img from '../assets/img/tab.svg'

class Tab extends Component {
  render() {
    return (

          <div>
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                  <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Día</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Semana</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Mes</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Año</a>
                </li>
              </ul>
              <div class="tab-content d-flex justify-content-center mt-1" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"><img src={Img} className="img-fluid" alt="Tab"></img></div>
                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"><img src={Img} className="img-fluid" alt="Tab"></img></div>
                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"><img src={Img} className="img-fluid" alt="Tab"></img></div>
                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"><img src={Img} className="img-fluid" alt="Tab"></img></div>
              </div>
   </div>
    )
  }
}

export default Tab;
