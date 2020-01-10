import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ChartistGraph from "react-chartist";
import {
  levelStepsChart,
  pie,
  dayStepsChart,
  weekStepsChart,
  monthStepsChart
} from "../../variables/charts.js";
import CardTrainfes from '../../components/Card/CardTrainfes.js';
import IcoCheckMark from '../../assets/img/icon/icon-check-mark.svg'
import IcoReminderElectrodeWalkfes from '../../assets/img/iconPerson/icon-electrode-reminder-walkfes.svg'
import IcoCanalWalkfes from '../../assets/img/configuracion-canal-walkfes.svg'
import IcoListas from '../../assets/img/ListasWalkfes.svg'



class TabWalkfes extends Component {
  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>Día</Tab>
          <Tab>Semana</Tab>
          <Tab>Mes</Tab>
          <Tab>Año</Tab>
          <Tab className="react-tabs__tab-setting" >Configuración</Tab>
        </TabList>
        <TabPanel>
        <div className="container-fluid p-0">
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
                          <ChartistGraph className="" data={dayStepsChart.data} type="Bar" options={dayStepsChart.options} listener={dayStepsChart.animation} />
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
                          <ChartistGraph className="" data={pie.data} type="Pie" options={pie.options} listener={pie.animation} />
                      </div>
                  </CardTrainfes>
              </div>
          </div>
      </div>
      </TabPanel>
      <TabPanel>
      <div className="container-fluid p-0">
         <div className="row">
             <div className="col-md-8 mt-4">
                 <CardTrainfes>
                     <div className="card-body">
                         <p className="card-title-session-maqueta mb-0">Estadisticas Semana</p>
                         <p className="card-category m-0">Pasos/Día<span><img src={IcoCheckMark} className="img-fluid mx-2" alt="Icon Check Mar"></img></span></p>
                         <p className="card-activity mb-0">340</p>
                     </div>
                     <div className="ct-chart color-calypso">
                         <ChartistGraph className="" data={weekStepsChart.data} type="Bar" options={weekStepsChart.options} listener={weekStepsChart.animation} />
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
                         <ChartistGraph className="" data={pie.data} type="Pie" options={pie.options} listener={pie.animation} />
                     </div>
                 </CardTrainfes>
             </div>
         </div>
      </div>
      </TabPanel>
      <TabPanel>
      <div className="container-fluid p-0">
         <div className="row">
             <div className="col-md-8 mt-4">
                 <CardTrainfes>
                     <div className="card-body">
                         <p className="card-title-session-maqueta mb-0">Estadisticas Mes</p>
                         <p className="card-category m-0">Pasos/Semanas<span><img src={IcoCheckMark} className="img-fluid mx-2" alt="Icon Check Mar"></img></span></p>
                         <p className="card-activity mb-0">340</p>
                     </div>
                     <div className="ct-chart color-month">
                         <ChartistGraph className="" data={monthStepsChart.data} type="Bar" options={monthStepsChart.options} listener={monthStepsChart.animation} />
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
                         <ChartistGraph className="" data={pie.data} type="Pie" options={pie.options} listener={pie.animation} />
                     </div>
                 </CardTrainfes>
             </div>
         </div>
      </div>
      </TabPanel>
      <TabPanel>
      <div className="container-fluid p-0">
         <div className="row">
             <div className="col-md-8 mt-4">
                 <CardTrainfes>
                     <div className="card-body">
                         <p className="card-title-session-maqueta mb-0">Estadisticas Año</p>
                         <p className="card-category m-0">Pasos/Meses<span><img src={IcoCheckMark} className="img-fluid mx-2" alt="Icon Check Mar"></img></span></p>
                         <p className="card-activity mb-0">340</p>
                     </div>
                     <div className="ct-chart color-calypso">
                         <ChartistGraph className="" data={levelStepsChart.data} type="Line" options={levelStepsChart.options} listener={levelStepsChart.animation} />
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
                         <ChartistGraph className="" data={pie.data} type="Pie" options={pie.options} listener={pie.animation} />
                     </div>
                 </CardTrainfes>
             </div>
         </div>
      </div>
      </TabPanel>
      <TabPanel>
      <div className="container-fluid p-0">
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
                      <div style={{ padding: "10px 20px 20px" }}>
                          <p className="card-title-session-maqueta mb-0">Configuracion Sesión</p>
                          <p className="card-category m-0">Intensidad<span><img src={IcoCheckMark} className="img-fluid mx-2" alt="Icon Check Mar"></img></span></p>
                      </div>
                      <div className="d-flex align-items-center d-flex justify-content-center">
                          <img src={IcoListas} className="img-fluid mb-4" alt="Ico Canal Walkfes"></img>
                      </div>
                  </CardTrainfes>
              </div>
          </div>
      </div>
      </TabPanel>
   </Tabs>
    )
  }
}

export default TabWalkfes;
