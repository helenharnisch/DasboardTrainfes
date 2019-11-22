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
import IcoReminderElectrodeWalkfes from '../assets/img/iconPerson/icon-electrode-reminder-walkfes.svg'


class TabWalkfes extends Component {
  render() {
    return (
      <div>
      <ul className="nav nav-tabs nav-fill" id="myTab" role="tablist">
          <li className="nav-item">
              <a className="nav-link active" id="dia-tab" data-toggle="tab" href="#dia" role="tab" aria-controls="home" aria-selected="true">Día</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" id="semana-tab" data-toggle="tab" href="#semana" role="tab" aria-controls="profile" aria-selected="false">Semana</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" id="mes-tab" data-toggle="tab" href="#mes" role="tab" aria-controls="contact" aria-selected="false">Mes</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" id="ano-tab" data-toggle="tab" href="#ano" role="tab" aria-controls="contact" aria-selected="false">Año</a>
          </li>
          <li className="nav-item d-flex justify-content-end">
              <a className="nav-link-setting" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Configuración</a>
          </li>
      </ul>
      <div className="tab-content mt-1" id="myTabContent">
          <div className="tab-pane fade show active" id="dia" role="tabpanel" aria-labelledby="home-tab">
           <div className="row">
            <div className="col-md-3 mt-4 d-flex justify-content-center">
             <CardTrainfes>
              <p style={{ padding: "10px 20px 20px" }}className="card-title-session-maqueta text-center mb-0">Electrodos</p>
              <div className="d-flex align-items-center d-flex justify-content-center">
              <img src={IcoReminderElectrodeWalkfes} className="img-fluid" alt="Ico Reminder Electrode Walkfes"></img>
              </div>
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
            <div className="col-md-3 mt-4">
             <CardTrainfes>
              <div className="card-body">
               <p className="card-title-session-maqueta mb-0">Pasos Promedio</p>
               <p className="card-category m-0">Total pasos/Min.<span><img src={IcoCheckMark} className="img-fluid mx-2" alt="Icon Check Mar"></img></span></p>
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
          <div className="tab-pane fade show active" id="semana" role="tabpanel" aria-labelledby="profile-tab">
            <div className="row">
             <div className="col-md-8 mt-4">
              <CardTrainfes>
               <div className="card-body">
                <p className="card-title-session-maqueta mb-0">Estadisticas Semana</p>
                <p className="card-category m-0">Pasos/Día<span><img src={IcoCheckMark} className="img-fluid mx-2" alt="Icon Check Mar"></img></span></p>
                <p className="card-activity mb-0">340</p>
              </div>
              <div className="ct-chart color-calypso">
               <ChartistGraph
                className=""
                data={weekStepsChart.data} type="Bar"
                options={weekStepsChart.options}
                listener={weekStepsChart.animation} />
              </div>
               </CardTrainfes>
             </div>
             <div className="col-md-4 mt-4">
              <CardTrainfes>
               <div className="card-body">
                <p className="card-title-session-maqueta mb-0">Pasos Promedio</p>
                <p className="card-category m-0">Total pasos/Día<span><img src={IcoCheckMark} className="img-fluid mx-2" alt="Icon Check Mar"></img></span></p>
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
          <div className="tab-pane fade show active" id="mes" role="tabpanel" aria-labelledby="contact-tab">
            <div className="row">
             <div className="col-md-8 mt-4">
              <CardTrainfes>
               <div className="card-body">
                <p className="card-title-session-maqueta mb-0">Estadisticas Mes</p>
                <p className="card-category m-0">Pasos/Semanas<span><img src={IcoCheckMark} className="img-fluid mx-2" alt="Icon Check Mar"></img></span></p>
                <p className="card-activity mb-0">340</p>
              </div>
              <div className="ct-chart color-month">
               <ChartistGraph
                className=""
                data={monthStepsChart.data} type="Bar"
                options={monthStepsChart.options}
                listener={monthStepsChart.animation} />
              </div>
               </CardTrainfes>
             </div>
             <div className="col-md-4 mt-4">
              <CardTrainfes>
               <div className="card-body">
                <p className="card-title-session-maqueta mb-0">Pasos Promedio</p>
                <p className="card-category m-0">Total pasos/Semanas<span><img src={IcoCheckMark} className="img-fluid mx-2" alt="Icon Check Mar"></img></span></p>
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
          <div className="tab-pane fade show active" id="ano" role="tabpanel" aria-labelledby="contact-tab">
            <div className="row">
             <div className="col-md-8 mt-4">
              <CardTrainfes>
               <div className="card-body">
                <p className="card-title-session-maqueta mb-0">Estadisticas Año</p>
                <p className="card-category m-0">Pasos/Meses<span><img src={IcoCheckMark} className="img-fluid mx-2" alt="Icon Check Mar"></img></span></p>
                <p className="card-activity mb-0">340</p>
              </div>
              <div className="ct-chart color-calypso">
               <ChartistGraph
                className=""
                data={levelStepsChart.data} type="Line"
                options={levelStepsChart.options}
                listener={levelStepsChart.animation} />
              </div>
               </CardTrainfes>
             </div>
             <div className="col-md-4 mt-4">
              <CardTrainfes>
               <div className="card-body">
                <p className="card-title-session-maqueta mb-0">Pasos Promedio</p>
                <p className="card-category m-0">Total pasos/Meses<span><img src={IcoCheckMark} className="img-fluid mx-2" alt="Icon Check Mar"></img></span></p>
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

export default TabWalkfes;
