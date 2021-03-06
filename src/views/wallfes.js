import React from "react";
import Main from '../components/Main'
import CardSesion from '../components/Card/CardSesion'
import IcoWalkfes from '../assets/img/iconModos/icon-walkfes.svg'
import axios from 'axios'
import { getUserId } from '../lib/Router'


class Walkfes extends React.Component {
    constructor(p) {
        super(p);
        this.state = {
            data: [],
        }
    }

    async getData() {
        axios.get('/users/user-activity/session/' + getUserId())
            .then(async res => {
                this.setState({ data: res.data.result })
                console.log('RES',res)
            })
            .catch(err => console.log(err))
    }

    async componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <Main title="Modo Walkfes">
                {this.state.data.map((element, index) => (<CardSesion path="walkfes" key={index}  title={element.session_name} category={"Total pasos"} imgModes={IcoWalkfes} activity={element.total_steps} id={element.session_id} />))}
            </Main>
        )
    }
}


export default Walkfes;
