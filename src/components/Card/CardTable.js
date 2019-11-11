import React, { Component } from 'react';
import styles from '../../assets/css/components/Card/CardTableStyle.css'

class CardTable extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  parseDate(date){
    date = new Date(date);
    return date.getDate() + ' - ' + date.getMonth() + ' - ' + date.getFullYear();
  }

  render() {
    const { data } = this.props;
    return (
     <div className="table-responsive-xl">
      <table className="table table-hover text-center">
        <thead className="text-black-50">
          <tr>
            <th scope="col" className="border-0">Fecha</th>
            <th scope="col" className="border-0">Total de pasos</th>
            <th scope="col" className="border-0">PPM</th>
            <th scope="col" className="border-0">Duracion</th>
          </tr>
        </thead>
        <tbody className="text-black-50">
          {data ? data.map((e,i) => (
          <tr key={i}>
            <th scope="row">{this.parseDate(e.date)}</th>
            <td>{e.total_steps}</td>
            <td>{parseFloat(e.ppm).toFixed(2)}</td>
            <td>{e.duration}</td>
          </tr>)): null}
        </tbody>
      </table>
    </div>
    )
  }
}

export default CardTable;
