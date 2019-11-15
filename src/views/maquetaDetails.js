import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
import { options, animation1 } from '../variables/charts'
import {
  levelStepsChart,
  timeStepsChart,
  pie,
  stepsChart,
  emailsSubscriptionChart,
  weekStepsChart
} from "../variables/charts.js";
import Main from '../components/Main'
import IcoArow from '../assets/img/icon/icon-arow-back.svg'
import CardTrainfes from '../components/Card/CardTrainfes.js';
import CardMaqueta from '../components/Card/CardMaqueta.js';
import CardLastSession from '../components/Card/CardLastSession.js';
import CardRealSession from '../components/Card/CardRealSession.js';
import CardReviewSession from '../components/Card/CardReviewSession.js';
import CardTable from '../components/Card/CardTable.js';
import Tab from '../components/Tab.js';
import axios from 'axios';
import { getUserId } from '../lib/Router'
import Grafico_1 from '../assets/img/grafico_1.svg'
import Grafico_2 from '../assets/img/grafico_2.svg'



class MaquetaDetails extends React.Component {
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
        <a style={{ displa: "block", position: 'absolute', top: '70px', left: '0', cursor: 'poi' }} onClick={() => this.props.history.goBack()}><img src={IcoArow} /></a>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-4">
              <CardTrainfes>
                <CardMaqueta/>
              </CardTrainfes>
            </div>
            <div className="col-md-4">
              <CardTrainfes>
                <CardMaqueta/>
              </CardTrainfes>
            </div>
            <div className="col-md-4">
              <CardTrainfes>
                <CardMaqueta/>
              </CardTrainfes>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <CardTrainfes>
                <img src={Grafico_1} className="img-fluid" alt=""></img>
            </CardTrainfes>
            </div>
            <div className="col-md-4">
            <CardTrainfes>
              <img src={Grafico_2} className="img-fluid" alt=""></img>
            </CardTrainfes>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <CardTrainfes>
                <div className="card-body-grafico">
                  <p className="card-title-grafico mb-1">Estadisticas por año</p>
                    <p className="card-category m-0">Mejor mes</p>
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
                <Tab/>
              </CardTrainfes>
            </div>
          </div>

        </div>
      </Main>
    )
  }
}

export default MaquetaDetails;
