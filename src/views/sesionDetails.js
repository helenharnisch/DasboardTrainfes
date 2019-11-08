import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
import {
  levelStepsChart,
  pie,
  stepsChart,
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
import axios from 'axios';
import { getUserId } from '../lib/Router'

const SessionDetails = (props) => {
  console.log(props)
  return (
    <Main title={"Session" + props.match.params.id}>
      <a style={{ displa: "block", position: 'absolute', top: '70px', left: '-25px' }} onClick={() => props.history.goBack()}><img src={IcoArow} /></a>
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-4">
            <CardTrainfes>
              <CardLastSession title={"Última Sesión"} category={"Total pasos"} activity={349} />
            </CardTrainfes>
          </div>
          <div className="col-md-4">
            <CardTrainfes>
              <CardRealSession title={"Actual Sesión"} category={"Total pasos"} activity={350} />
            </CardTrainfes>
          </div>
          <div className="col-md-4">
            <CardTrainfes>
              <CardReviewSession title={"Estimado"} category={"Total pasos"} activity={349} />
            </CardTrainfes>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <CardTrainfes>
              <div className="card-body">
                <p className="card-title mb-1">Titulo</p>
                <p className="card-category m-0">Total pasos</p>
                <p className="card-activity mb-0">123</p>
              </div>
              <div className="ct-chart">
                <ChartistGraph
                  className=""
                  data={stepsChart.data}
                  type="Line"
                  options={stepsChart.options}
                  listener={stepsChart.animation}
                />
              </div>
            </CardTrainfes>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <CardTrainfes>
              <div className="card-body">
                <p className="card-title mb-1">Titulo</p>
                <p className="card-category m-0">Total pasos</p>
                <p className="card-activity mb-0">123</p>
              </div>
              <div className="ct-chart">
                <ChartistGraph
                  className=""
                  data={levelStepsChart.data}
                  type="Line"
                  options={levelStepsChart.options}
                  listener={levelStepsChart.animation}
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
