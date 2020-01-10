import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
import {
  levelStepsChartTime,
  levelStepsChart,
  pie,
  stepsChart,
  emailsSubscriptionChart,
  weekStepsChart,
  timeStepsChart
} from "../variables/charts.js";
import Main from '../components/Main'
import IcoArow from '../assets/img/icon/icon-arow-back.svg'
import IcoCheckMark from '../assets/img/icon/icon-check-mark.svg'
import IcoRemoTwo from '../assets/img/iconModos/icon-remo-two.svg'
import CardTrainfes from '../components/Card/CardTrainfes.js';
import CardLastSession from '../components/Card/CardLastSession.js';
import CardRealSession from '../components/Card/CardRealSession.js';
import CardReviewSession from '../components/Card/CardReviewSession.js';
import CardTable from '../components/Card/CardTable.js';
import TabSensor from '../components/Tab/TabRemo.js';
import axios from 'axios';
import { getUserId } from '../lib/Router'



class SesionDetailsRemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      stepGraphRender: false,
      pasos: 0
    }
  }


  componentDidMount() {
    axios.get(`/users/user-activity/session/${getUserId()}/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ data: res.data, stepGraphRender: true, pasos: res.data.data_steps[res.data.data_steps.length - 1].series[res.data.data_steps[res.data.data_steps.length - 1].series.length - 1] })
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }


  generateDataSteps(data) {
    return { labels: data[0].labels, series: [data[0].series] }
  }

  render() {
    return (
      <Main title={"SESSION TEST REMO APP"}>
        <a style={{ displa: "block", position: 'absolute', top: '70px', left: '0', cursor: 'pointer' }} onClick={() => this.props.history.goBack()}><img src={IcoArow} /></a>
        <div className="col-md-12">
          <div className="row">
          <div className="col-md-12">
              <TabSensor/>
          </div>
            <div className="col-md-4">
              <CardTrainfes>
                <CardLastSession title={"Penúltima Sesión"} category={"Total Reps."} imgModes={IcoRemoTwo} activity={this.state.data.steps_ant_last_session ? this.state.data.steps_ant_last_session : 0} />
              </CardTrainfes>
            </div>
            <div className="col-md-4">
              <CardTrainfes>
                <CardRealSession title={"Última Sesión"} category={"Total Reps."} imgModes={IcoRemoTwo} activity={this.state.data.steps_last_session ? this.state.data.steps_last_session : 0} />
              </CardTrainfes>
            </div>
            <div className="col-md-4">
              <CardTrainfes>
                <CardReviewSession title={"Total del mes"} category={"Total Reps."} imgModes={IcoRemoTwo} activity={this.state.data.steps_actual_month ? this.state.data.steps_actual_month : 0} />
              </CardTrainfes>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
            <CardTrainfes>
            <div className="card-body">
              <p className="card-title-session-maqueta mb-0">Estadisticas de noviembre</p>
              <p className="card-category m-0">Mejor mes<span><img src={IcoCheckMark} className="img-fluid mx-2" alt="Icon Check Mar"></img></span></p>
              <p className="card-activity mb-0">340</p>
            </div>
              <div className="ct-chart">
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
            <div className="col-md-4">
            <CardTrainfes>
            <div className="card-body">
              <p className="card-title-session-maqueta mb-0">Reps. Promedio noviembre</p>
              <p className="card-category m-0">Total Reps.<span><img src={IcoCheckMark} className="img-fluid mx-2" alt="Icon Check Mar"></img></span></p>
              <p className="card-activity mb-0">340</p>
            </div>
              <div className="ct-chart color-calypso">
                <ChartistGraph
                  className=""
                  data={pie.data}
                  type="Pie"
                  options={pie.options}
                  listener={pie.animation}
                />
              </div>
            </CardTrainfes>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <CardTrainfes>
                <div className="card-body">
                  <p className="card-title-session-maqueta mb-0">Estadisticas por año</p>
                    <p className="card-category m-0">Mejor mes<span><img src={IcoCheckMark} className="img-fluid mx-2" alt="Icon Check Mar"></img></span></p>
                  <p className="card-activity mb-0">123</p>
                </div>
                <div className="ct-chart color-calypso">
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
                <CardTable data={this.state.data.data_table} />
              </CardTrainfes>
            </div>
          </div>
        </div>
      </Main>
    )
  }
}

export default SesionDetailsRemo;
