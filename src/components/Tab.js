import React, { Component } from 'react';
import styles from '../assets/css/components/NavbarStyle.css'
import Img from '../assets/img/tab.svg'
import ChartistGraph from "react-chartist";
import { options, animation1 } from '../variables/charts'
import {
  levelStepsChartTime,
  levelStepsChart,
  timeStepsChart,
  pie,
  stepsChart,
  emailsSubscriptionChart,
  dayStepsChart,
  weekStepsChart,
  monthStepsChart
} from "../variables/charts.js";
import CardTrainfes from '../components/Card/CardTrainfes.js';
import IcoCheckMark from '../assets/img/icon/icon-check-mark.svg'
import IcoReminderElectrode from '../assets/img/iconPerson/icon-electrode-reminder.svg'


class Tab extends Component {
  render() {
    return (
      <div>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
              <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Día</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Semana</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Mes</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Año</a>
          </li>
      </ul>
      <div className="tab-content mt-1" id="myTabContent">
          <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
           <div className="row">
            <div className="col-md-2 mt-4 d-flex justify-content-center">
             <CardTrainfes>
              <p style={{ padding: "10px 0 20px 20px" }}className="card-title-session-maqueta mb-0">Electrodos</p>
              <img src={IcoReminderElectrode} className="img-fluid pb-4" alt="Ico Reminder Electrode"></img>
             </CardTrainfes>
            </div>
            <div className="col-md-6 mt-4">
             <CardTrainfes>
              <div className="card-body">
               <p className="card-title-session-maqueta mb-0">Estadisticas Sesión</p>
               <p className="card-category m-0">Pasos/Min.<span><img src={IcoCheckMark} className="img-fluid mx-2" alt="Icon Check Mar"></img></span></p>
               <p className="card-activity mb-0">340</p>
             </div>
             <div className="ct-chart color-calypso">
                 <ChartistGraph
                 className=""
                 data={dayStepsChart.data}
                 type="Bar"
                 options={dayStepsChart.options}
                 listener={dayStepsChart.animation}
               />
             </div>
              </CardTrainfes>
            </div>
            <div className="col-md-4 mt-4">
             <CardTrainfes>
              <div className="card-body">
               <p className="card-title-session-maqueta mb-0">Pasos Promedio Sesión</p>
               <p className="card-category m-0">Total pasos<span><img src={IcoCheckMark} className="img-fluid mx-2" alt="Icon Check Mar"></img></span></p>
               <p className="card-activity mb-0">340</p>
              </div>
              <div className="ct-chart color-violet">
               <ChartistGraph
                className=""
                data={pie.data} type="Pie"
                options={pie.options}
                listener={pie.animation} />
              </div>
                </CardTrainfes>
              </div>
            </div>
          </div>
          <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <div className="row">
             <div className="col-md-2 mt-4 d-flex justify-content-center">
              <CardTrainfes>
               <p style={{ padding: "10px 0 20px 20px" }}className="card-title-session-maqueta mb-0">Electrodos</p>
               <img src={IcoReminderElectrode} className="img-fluid pb-4" alt="Ico Reminder Electrode"></img>
              </CardTrainfes>
             </div>
             <div className="col-md-6 mt-4">
              <CardTrainfes>
               <div className="card-body">
                <p className="card-title-session-maqueta mb-0">Estadisticas Sesión</p>
                <p className="card-category m-0">Pasos/Min.<span><img src={IcoCheckMark} className="img-fluid mx-2" alt="Icon Check Mar"></img></span></p>
                <p className="card-activity mb-0">340</p>
              </div>
              <div className="ct-chart color-calypso">
               <ChartistGraph
                className=""
                data={dayStepsChart.data} type="Bar"
                options={dayStepsChart.options}
                listener={dayStepsChart.animation} />
              </div>
               </CardTrainfes>
             </div>
             <div className="col-md-4 mt-4">
              <CardTrainfes>
               <div className="card-body">
                <p className="card-title-session-maqueta mb-0">Pasos Promedio Sesión</p>
                <p className="card-category m-0">Total pasos<span><img src={IcoCheckMark} className="img-fluid mx-2" alt="Icon Check Mar"></img></span></p>
                <p className="card-activity mb-0">340</p>
               </div>
               <div className="ct-chart color-violet">
                <ChartistGraph
                 className=""
                 data={pie.data} type="Pie"
                 options={pie.options}
                 listener={pie.animation} />
               </div>
                 </CardTrainfes>
               </div>
             </div>
          </div>
          <div className="tab-pane fade show active" id="contact" role="tabpanel" aria-labelledby="contact-tab">
            <div className="row">
             <div className="col-md-2 mt-4 d-flex justify-content-center">
              <CardTrainfes>
               <p style={{ padding: "10px 0 20px 20px" }}className="card-title-session-maqueta mb-0">Electrodos</p>
               <img src={IcoReminderElectrode} className="img-fluid pb-4" alt="Ico Reminder Electrode"></img>
              </CardTrainfes>
             </div>
             <div className="col-md-6 mt-4">
              <CardTrainfes>
               <div className="card-body">
                <p className="card-title-session-maqueta mb-0">Estadisticas Sesión</p>
                <p className="card-category m-0">Pasos/Min.<span><img src={IcoCheckMark} className="img-fluid mx-2" alt="Icon Check Mar"></img></span></p>
                <p className="card-activity mb-0">340</p>
              </div>
              <div className="ct-chart color-calypso">
               <ChartistGraph
                className=""
                data={dayStepsChart.data} type="Bar"
                options={dayStepsChart.options}
                listener={dayStepsChart.animation} />
              </div>
               </CardTrainfes>
             </div>
             <div className="col-md-4 mt-4">
              <CardTrainfes>
               <div className="card-body">
                <p className="card-title-session-maqueta mb-0">Pasos Promedio Sesión</p>
                <p className="card-category m-0">Total pasos<span><img src={IcoCheckMark} className="img-fluid mx-2" alt="Icon Check Mar"></img></span></p>
                <p className="card-activity mb-0">123</p>
               </div>
               <div className="ct-chart color-violet">
                <ChartistGraph
                 className=""
                 data={pie.data} type="Pie"
                 options={pie.options}
                 listener={pie.animation} />
               </div>
                 </CardTrainfes>
               </div>
             </div>
          </div>
          <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
            <div className="row">
             <div className="col-md-2 mt-4 d-flex justify-content-center">
              <CardTrainfes>
               <p style={{ padding: "10px 0 20px 20px" }}className="card-title-session-maqueta mb-0">Electrodos</p>
               <img src={IcoReminderElectrode} className="img-fluid pb-4" alt="Ico Reminder Electrode"></img>
              </CardTrainfes>
             </div>
             <div className="col-md-6 mt-4">
              <CardTrainfes>
               <div className="card-body">
                <p className="card-title-session-maqueta mb-0">Estadisticas Sesión</p>
                <p className="card-category m-0">Pasos/Min.<span><img src={IcoCheckMark} className="img-fluid mx-2" alt="Icon Check Mar"></img></span></p>
                <p className="card-activity mb-0">340</p>
              </div>
              <div className="ct-chart color-calypso">
               <ChartistGraph
                className=""
                data={dayStepsChart.data} type="Bar"
                options={dayStepsChart.options}
                listener={dayStepsChart.animation} />
              </div>
               </CardTrainfes>
             </div>
             <div className="col-md-4 mt-4">
              <CardTrainfes>
               <div className="card-body">
                <p className="card-title-session-maqueta mb-0">Pasos Promedio Sesión</p>
                <p className="card-category m-0">Total pasos<span><img src={IcoCheckMark} className="img-fluid mx-2" alt="Icon Check Mar"></img></span></p>
                <p className="card-activity mb-0">123</p>
               </div>
               <div className="ct-chart color-violet">
                <ChartistGraph
                 className=""
                 data={pie.data} type="Pie"
                 options={pie.options}
                 listener={pie.animation} />
               </div>
                 </CardTrainfes>
               </div>
             </div>
          </div>
      </div>
  </div>
    )
  }
}

export default Tab;
