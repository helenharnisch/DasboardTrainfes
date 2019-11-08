import React from "react";
import Main from '../components/Main'
import CardSesion from '../components/Card/CardSesion'
import axios from 'axios'
import { getUserId } from '../lib/Router'


class Walkfes extends React.Component {
    constructor(p) {
        super(p);
        this.state = {
            data: [],
            activities: []
        }
    }

    async getData() {
        axios.get('/session')
            .then(async res => {
                await res.data.result.map(async e => {
                    if (e.user_id === getUserId()) {
                        const a = await axios.get('/users/search/activity/' + getUserId() + '/' + e._id)
                        console.log('>>>', a)
                        e['activity'] = a.data.result;
                        // e['steps'] = a.data.result.activity.activity_results[a.data.result.activity_results.lenght].steps_taken;
                        console.log('1',e);
                        this.setState({ data: [...this.state.data, e] })
                    }
                })
            })
            .catch(err => console.log(err))
    }

    async componentDidMount() {
        this.getData();
    }

    render() {
        console.log(this.state.data)
        return (
            <Main title="Modo Walkfes">
                {this.state.data.map((element, index) => (<CardSesion key={index} title={element.session_name} category={element.category} activity={element.total_step} id={element._id} data={element} />))}
            </Main>
        )
    }
}


export default Walkfes;
