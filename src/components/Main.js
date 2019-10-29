import React from "react";

const Main = ({title,children}) => (
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h2>{title}</h2>
            </div>
        </div>
        <div className="row">
            {children}
        </div>
    </div>
)


export default Main;