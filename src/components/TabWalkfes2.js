import React, { Component } from 'react';
import {Tabs, Tab} from 'react-bootstrap-tabs';
import styles from '../assets/css/components/NavbarStyle.css'
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
import IcoCanalWalkfes from '../assets/img/configuracion-canal-walkfes.svg'



class TabWalkfes2 extends Component {
  render() {
    return (

      <Tabs onSelect={(index, label) => console.log(label + ' selected')} headerClass="nav-fill">

        <Tab label="Día">
        <div className="row">
         <div className="col-md-3 mt-4 d-flex justify-content-center">
          <CardTrainfes>
           <p style={{ padding: "10px 20px 20px" }} className="card-title-session-maqueta text-center mb-0">Electrodos</p>
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
        </Tab>

        <Tab label="Semana">
          <div className="container">
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
                data={weekStepsChart.data}
                type="Bar"
                options={weekStepsChart.options}
                listener={weekStepsChart.animation}
              />
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
        </Tab>
        <Tab label="Mes">
        <div className="row">
         <div >

         </div>
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
              data={weekStepsChart.data}
              type="Bar"
              options={weekStepsChart.options}
              listener={weekStepsChart.animation}
            />
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
        </Tab>
        <Tab label="Año">
        <div className="row">
         <div>

         </div>
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
              data={weekStepsChart.data}
              type="Bar"
              options={weekStepsChart.options}
              listener={weekStepsChart.animation}
            />
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
        </Tab>
        <Tab label="Configuración" headerClass="justify-content-end">
        <div className="row">
         <div className="col-md-6 mt-4 d-flex justify-content-center">
          <CardTrainfes>
          <div style={{ padding: "10px 20px 0" }}>
           <p className="card-title-session-maqueta mb-0">Configuracion Sesión</p>
           <p className="card-category m-0">Canales<span><img src={IcoCheckMark} className="img-fluid mx-2" alt="Icon Check Mar"></img></span></p>
         </div>
           <div className="d-flex align-items-center d-flex justify-content-center">
           <img src={IcoCanalWalkfes} className="img-fluid" alt="Ico Canal Walkfes"></img>
           <img src={IcoReminderElectrodeWalkfes} className="img-fluid ml-5 mb-4" alt="Ico Reminder Electrode Walkfes"></img>
           </div>
          </CardTrainfes>
         </div>
         <div className="col-md-6 mt-4">
          <CardTrainfes>
           <div className="card-body">
            <p className="card-title-session-maqueta mb-0">Configuracion Sesión</p>
            <p className="card-category m-0">Intensidad<span><img src={IcoCheckMark} className="img-fluid mx-2" alt="Icon Check Mar"></img></span></p>
          </div>
          <div className="row">
             <div className="col-md-6">
              <div className="ct-chart color-violet">
               <ChartistGraph
                className=""
                data={pie.data} type="Pie"
                options={pie.options}
                listener={pie.animation} />
              </div>
            </div>
            <div className="col-md-6">
             <div className="ct-chart color-violet">
              <ChartistGraph
               className=""
               data={pie.data} type="Pie"
               options={pie.options}
               listener={pie.animation} />
             </div>
           </div>
          </div>
           </CardTrainfes>
         </div>
         </div>
        </Tab>
      </Tabs>

    )
  }
}

export default TabWalkfes2;
