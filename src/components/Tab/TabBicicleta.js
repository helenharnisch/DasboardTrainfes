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
import IcoReminderElectrodeBicicleta from '../../assets/img/iconPerson/icon-electrode-reminder-bicicleta.svg'
import IcoReminderElectrodeBicicletaDorsal from '../../assets/img/iconPerson/icon-electrode-reminder-bicicleta-dorsal.svg'
import IcoAyudaBicicleta from '../../assets/img/iconPerson/ayuda-bicicleta.png'
import IcoAyudaBicicletaTwo from '../../assets/img/iconPerson/ayuda-bicicleta-two.png'
import IcoListasSensor from '../../assets/img/ListasSensor.svg'


class TabBicicleta extends Component {
  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>Electrodos</Tab>
          <Tab>Día</Tab>
          <Tab>Semana</Tab>
          <Tab>Mes</Tab>
          <Tab>Año</Tab>
          <Tab className="react-tabs__tab-setting" >Configuración</Tab>
        </TabList>
        <TabPanel>
        <div className="container-fluid p-0">
            <div className="row">
                <div className="col-md-6 mt-4 d-flex justify-content-center">
                    <CardTrainfes>
                        <div className="row">
                            <div className="col-md-6">
                                <p style={{ padding: "10px 20px 20px" }}className="card-title-session-maqueta text-center mb-0">Electrodos Frontal</p>
                                <div style={{ marginBottom: "32px" }}className="d-flex align-items-center d-flex justify-content-center">
                                    <img src={IcoReminderElectrodeBicicleta} className="img-fluid" alt="Ico Reminder Electrode Bicicleta"></img>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <p style={{ padding: "10px 20px 20px" }}className="card-title-session-maqueta text-center mb-0">Electrodos Dorsal</p>
                                <div style={{ marginBottom: "32px" }}className="d-flex align-items-center d-flex justify-content-center">
                                    <img src={IcoReminderElectrodeBicicletaDorsal} className="img-fluid" alt="Ico Reminder Electrode Bicicleta"></img>
                                </div>
                            </div>
                        </div>
                    </CardTrainfes>
                </div>
                <div className="col-md-6 mt-4 d-flex justify-content-center">
                    <CardTrainfes>
                        <div className="row">
                            <div className="col-md-6">
                                <p style={{ padding: "10px 20px 20px" }}className="card-title-session-maqueta text-center mb-0">Ayuda</p>
                                <div style={{ marginBottom: "32px" }}className="d-flex align-items-center d-flex justify-content-center">
                                    <img src={IcoAyudaBicicleta} className="img-fluid" alt="Ico Ayuda Bicicleta"></img>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <p style={{ padding: "10px 20px 20px" }}className="card-title-session-maqueta text-center mb-0">Ayuda</p>
                                <div style={{ marginBottom: "32px" }}className="d-flex align-items-center d-flex justify-content-center">
                                    <img src={IcoAyudaBicicletaTwo} className="img-fluid" alt="Ico Ayuda Bicicleta"></img>
                                </div>
                            </div>
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
                        <p className="card-title-session-maqueta mb-0">Estadisticas Sesión</p>
                        <p className="card-category m-0">Reps./Min.<span><img src={IcoCheckMark} className="img-fluid mx-2" alt="Icon Check Mar"></img></span></p>
                        <p className="card-activity mb-0">340</p>
                    </div>
                    <div className="ct-chart color-calypso">
                        <ChartistGraph className="" data={dayStepsChart.data} type="Bar" options={dayStepsChart.options} listener={dayStepsChart.animation} />
                    </div>
                </CardTrainfes>
            </div>
            <div className="col-md-4 mt-4">
                <CardTrainfes>
                    <div className="card-body">
                        <p className="card-title-session-maqueta mb-0">Reps. Promedio</p>
                        <p className="card-category m-0">Total reps./Min.<span><img src={IcoCheckMark} className="img-fluid mx-2" alt="Icon Check Mar"></img></span></p>
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
                     <p className="card-category m-0">Reps./Día<span><img src={IcoCheckMark} className="img-fluid mx-2" alt="Icon Check Mar"></img></span></p>
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
                     <p className="card-title-session-maqueta mb-0">Repeticiones Promedio</p>
                     <p className="card-category m-0">Total reps./Día<span><img src={IcoCheckMark} className="img-fluid mx-2" alt="Icon Check Mar"></img></span></p>
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
                     <p className="card-category m-0">Reps./Semanas<span><img src={IcoCheckMark} className="img-fluid mx-2" alt="Icon Check Mar"></img></span></p>
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
                     <p className="card-title-session-maqueta mb-0">Repeticiones Promedio</p>
                     <p className="card-category m-0">Total reps./Semanas<span><img src={IcoCheckMark} className="img-fluid mx-2" alt="Icon Check Mar"></img></span></p>
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
                       <p className="card-category m-0">Reps./Meses<span><img src={IcoCheckMark} className="img-fluid mx-2" alt="Icon Check Mar"></img></span></p>
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
                       <p className="card-title-session-maqueta mb-0">Repeticiones Promedio</p>
                       <p className="card-category m-0">Total reps./Meses<span><img src={IcoCheckMark} className="img-fluid mx-2" alt="Icon Check Mar"></img></span></p>
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
                          <img src={IcoReminderElectrodeBicicleta} className="img-fluid" alt="Ico Reminder Electrode Sensor"></img>
                          <img src={IcoReminderElectrodeBicicletaDorsal} className="img-fluid ml-5" alt="Ico Reminder Electrode Bicicleta"></img>
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
                          <img src={IcoListasSensor} className="img-fluid mb-4" alt="Ico Listas Sensor"></img>
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

export default TabBicicleta;
