import React from "react";
import Main from '../components/Main'

const SessionDetails = (props) => {
    console.log(props)
    return (
        <Main title="Session">
            <div className="col-md-12">
                <a style={{ displa: "block" }} onClick={() => props.history.goBack()}>Volver</a>
                <p style={{ displa: "block" }}>Sesion {props.match.params.id}</p>
            </div>
        </Main>
    )
}


export default SessionDetails;