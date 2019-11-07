import React, { Component } from 'react';
import styles from '../../assets/css/components/Card/CardTableStyle.css'

class CardTable extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    const { data } = this.props;
    return (
     <div className="table-responsive-xl">
      <table className="table table-hover text-center">
        <thead className="text-black-50">
          <tr>
            <th scope="col" className="border-0">Actividades</th>
            <th scope="col" className="border-0">Actividades</th>
            <th scope="col" className="border-0">Actividades</th>
            <th scope="col" className="border-0">Actividades</th>
          </tr>
        </thead>
        <tbody className="text-black-50">
          {data.map((e,i) => (
          <tr key={i}>
            <th scope="row">{e.created_at}</th>
            <td>{e.date_realization}</td>
            <td>{e.start_time ? e.start_time : '-'}</td>
            <td>{e.end_time ? e.end_time : '-'}</td>
          </tr>))}
        </tbody>
      </table>
    </div>
    )
  }
}

export default CardTable;
