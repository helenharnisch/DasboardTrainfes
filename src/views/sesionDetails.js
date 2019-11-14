import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
import { options, animation1 } from '../variables/charts'
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



class SessionDetails extends React.Component {
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
      <Main title={this.state.data.session_name}>
        <a style={{ displa: "block", position: 'absolute', top: '70px', left: '-25px' }} onClick={() => this.props.history.goBack()}><img src={IcoArow} /></a>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-4">
              <CardTrainfes>
                <CardLastSession title={"Última Sesión"} category={"Total pasos"} activity={this.state.data.steps_ant_last_session ? this.state.data.steps_ant_last_session : 0} />
              </CardTrainfes>
            </div>
            <div className="col-md-4">
              <CardTrainfes>
                <CardRealSession title={"Actual Sesión"} category={"Total pasos"} activity={this.state.data.steps_last_session ? this.state.data.steps_last_session : 0} />
              </CardTrainfes>
            </div>
            <div className="col-md-4">
              <CardTrainfes>
                <CardReviewSession title={"Estimado"} category={"Total pasos"} activity={this.state.data.steps_actual_month ? this.state.data.steps_actual_month : 0} />
              </CardTrainfes>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <CardTrainfes>
                <div className="card-body">
                  <p className="card-title mb-1">Gráfico</p>
                  <p className="card-category fw-600 m-0">Total pasos</p>
                  <p className="card-activity mb-0">{this.state.pasos ? this.state.pasos : 0}</p>
                </div>
                <div className="ct-chart">
                  {this.state.stepGraphRender ? <ChartistGraph
                    className=""
                    data={this.generateDataSteps(this.state.data.data_steps)}
                    type="Line"
                    options={levelStepsChart.options}
                    listener={levelStepsChart.animation}
                  /> : null}
                </div>
              </CardTrainfes>
            </div>
          </div>
          {JSON.stringify(this.state.data.data_pre_swing) != '[]' ? <div className="row">
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
          </div> : null}

          <div className="row">
            <div className="col-md-8">
            <CardTrainfes>
              <div className="card-body">
                <p className="card-title mb-1">Estadisticas</p>
                <p className="card-category m-0">Mejor tiempo</p>
                <p className="card-activity mb-0">130</p>
              </div>
              <div className="ct-chart">
                <ChartistGraph
                  className=""
                  data={completedTasksChart.data}
                  type="Bar"
                  options={completedTasksChart.options}
                  listener={completedTasksChart.animation}
                />
              </div>
            </CardTrainfes>
            </div>
            <div className="col-md-4">
            <CardTrainfes>
              <div className="card-body">
                <p className="card-title mb-1">Estadisticas</p>
                <p className="card-category m-0">Mejor tiempo</p>
                <p className="card-activity mb-0">130</p>
              </div>
              <div className="ct-chart">
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
                <CardTable data={this.state.data.data_table} />
              </CardTrainfes>
            </div>
          </div>
        </div>
      </Main>
    )
  }
}

export default SessionDetails;
