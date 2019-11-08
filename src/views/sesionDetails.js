import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
import { options, animation1 } from '../variables/charts'
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
import axios from 'axios';
import { getUserId } from '../lib/Router'

class SessionDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {}
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <Main title={"Session" + this.props.match.params.id}>
        <a style={{ displa: "block", position: 'absolute', top: '70px', left: '-25px' }} onClick={() => this.props.history.goBack()}><img src={IcoArow} /></a>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-4">
              <CardTrainfes>
                <CardLastSession title={"Nombre Sesión"} category={"Total pasos"} activity={349} name={"Última Sesión"} />
              </CardTrainfes>
            </div>
            <div className="col-md-4">
              <CardTrainfes>
                <CardRealSession title={"Nombre Sesión"} category={"Total pasos"} activity={350} name={"Actual Sesión"} />
              </CardTrainfes>
            </div>
            <div className="col-md-4">
              <CardTrainfes>
                <CardReviewSession title={"Nombre Sesión"} category={"Total pasos"} activity={349} name={"Estimado"} />
              </CardTrainfes>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <CardTrainfes>
                <div className="prueba">
                <ChartistGraph
                    className=""
                    data={{ series: [20, 10, 30, 40] }}
                    type="Pie"
                    options={{donut: true,donutWidth: 60,donutSolid: true,startAngle: 270,showLabel: true}}
                    listener={annualStepsChart.animation}
                  />
                </div>
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
                <CardTable data={[]} />
              </CardTrainfes>
            </div>
          </div>
        </div>
      </Main>
    )
  }

}



export default SessionDetails;
