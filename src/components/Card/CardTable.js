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

      <table className="table table-hover">
        <thead className="text-black-50">
          <tr>
            <th scope="col">Creado</th>
            <th scope="col">Realización</th>
            <th scope="col">Comienzo</th>
            <th scope="col">Fin</th>
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
    )
  }
}

export default CardTable;
