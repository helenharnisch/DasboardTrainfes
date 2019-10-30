import React from "react";
import Main from '../components/Main'
import IcoArow from '../assets/img/icon/icon-arow-back.svg'
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
                    <div className="col-md-4" style={{marginBottom:20}}>
                        <div className="card-trainfes">
                          <CardLastSession title={"Nombre Sesión"} category={"Total pasos"} activity={ 349 } name={ "Última Sesión" } />
                        </div>
                    </div>
                    <div className="col-md-4" style={{marginBottom:20}}>
                        <div className="card-trainfes">
                            <CardRealSession title={"Nombre Sesión"} category={"Total pasos"} activity={ 350 } name={ "Actual Sesión" } />
                        </div>
                    </div>
                    <div className="col-md-4" style={{marginBottom:20}}>
                        <div className="card-trainfes">
                            <CardReviewSession title={"Nombre Sesión"} category={"Total pasos"} activity={ 349 } name={ "Estimado" } />
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
                            <CardTable/>
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    )
}


export default SessionDetails;
