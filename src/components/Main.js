import React from "react";

const Main = ({title,children}) => (
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h4 className="text-black-50" style={{margin: '20px 0'}}>{title}</h4>
            </div>
        </div>
        <div className="row">
            {children}
        </div>
    </div>
)


export default Main;
