import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
import {
  annualStepsChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "../variables/charts.js";
import Main from '../components/Main'
import IcoArow from '../assets/img/icon/icon-arow-back.svg'
import CardTrainfes from '../components/Card/CardTrainfes.js';
import CardLastSession from '../components/Card/CardLastSession.js';
import CardRealSession from '../components/Card/CardRealSession.js';
import CardReviewSession from '../components/Card/CardReviewSession.js';
import CardTable from '../components/Card/CardTable.js';
import { todos } from '../todos.json';


const SessionDetails = (props) => {
    console.log(props)
    return (
        <Main title={"Session" + props.match.params.id}>
            <a style={{ displa: "block", position: 'absolute', top: '70px',left:'-25px' }} onClick={() => props.history.goBack()}><img src={IcoArow} /></a>
            <div className="col-md-12">
                <div className="row">
                  <div className="col-md-4">
                    <CardTrainfes>
                      <CardLastSession title={"Nombre Sesión"} category={"Total pasos"} activity={ 349 } name={ "Última Sesión" } />
                    </CardTrainfes>
                  </div>
                  <div className="col-md-4">
                    <CardTrainfes>
                      <CardRealSession title={"Nombre Sesión"} category={"Total pasos"} activity={ 350 } name={ "Actual Sesión" } />
                    </CardTrainfes>
                  </div>
                  <div className="col-md-4">
                    <CardTrainfes>
                      <CardReviewSession title={"Nombre Sesión"} category={"Total pasos"} activity={ 349 } name={ "Estimado" } />
                    </CardTrainfes>
                  </div>
                </div>
                <div className="row">
                 <div className="col-md-4">
                    <CardTrainfes>
                      <div className="prueba"></div>
                    </CardTrainfes>
                 </div>
                 <div className="col-md-8">
                   <CardTrainfes>
                        <div className="ct-chart">
                        <ChartistGraph
                          className=""
                          data={annualStepsChart.data}
                          type="Line"
                          options={annualStepsChart.options}
                          listener={annualStepsChart.animation}
                        />
                      </div>
                    </CardTrainfes>
                  </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <CardTrainfes>
                            <CardTable/>
                        </CardTrainfes>
                    </div>
                </div>
            </div>
        </Main>
    )
}


export default SessionDetails;
