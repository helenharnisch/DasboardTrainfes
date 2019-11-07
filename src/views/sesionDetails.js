import React from "react";
import Main from '../components/Main'
import IcoArow from '../assets/img/icon/icon-arow-back.svg'
import CardLastSession from '../components/Card/CardLastSession.js';
import CardRealSession from '../components/Card/CardRealSession.js';
import CardReviewSession from '../components/Card/CardReviewSession.js';
import CardTable from '../components/Card/CardTable.js';
import axios from 'axios';
import { getUserId } from '../lib/Router'


class SessionDetails extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data:[],
            activities:[],
            total_step:0
        }
    }

    async componentDidMount(){
        console.log(this.props)
        const a = await axios.get('/users/search/activity/' + getUserId() + '/' + this.props.match.params.id)
        this.setState({activities:a.data.activity, data:a.data,total_step:a.data.total_steps})
        console.log('>>>>>',a);
    }

    render(){
        const props = this.props;
        return (
            <Main title={"Session" + props.match.params.id}>
                <a style={{ displa: "block", position: 'absolute', top: '70px',left:'-25px' }} onClick={() => props.history.goBack()}><img src={IcoArow} /></a>
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-4" style={{marginBottom:20}}>
                            <div className="card-trainfes">
                              <CardLastSession title={"Nombre Sesión"} category={"Total pasos"} activity={ this.state.total_step } name={ "Última Sesión" } />
                            </div>
                        </div>
                        <div className="col-md-4" style={{marginBottom:20}}>
                            <div className="card-trainfes">
                                <CardRealSession title={"Nombre Sesión"} category={"Total pasos"} activity={ this.state.total_step } name={ "Actual Sesión" } />
                            </div>
                        </div>
                        <div className="col-md-4" style={{marginBottom:20}}>
                            <div className="card-trainfes">
                                <CardReviewSession title={"Nombre Sesión"} category={"Total pasos"} activity={ this.state.total_step } name={ "Estimado" } />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4" style={{marginBottom:20}}>
                            <div className="card-trainfes">
                                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                            </div>
                        </div>
                        <div className="col-md-8" style={{marginBottom:20}}>
                            <div className="card-trainfes">
                                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card-trainfes">
                                <CardTable data={this.state.activities}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Main>
        )
    }
}



export default SessionDetails;
