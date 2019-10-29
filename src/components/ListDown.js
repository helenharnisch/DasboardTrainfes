import React from 'react'

const ListDown = ({ children, title, open }) => (
    <div className="accordion" id="accordionExample">
        <div className="card">
            <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">{title}</button>
                </h2>
            </div>
            <div id="collapseOne" className={open ? "collapse show":"collapse"} aria-labelledby="headingOne" data-parent="#accordionExample">
                <div className="card-body">
                    {children}
                </div>
            </div>

        </div>
    </div>
)

export default ListDown;