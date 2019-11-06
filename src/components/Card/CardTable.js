import React, { Component } from 'react';
import styles from '../../assets/css/components/Card/CardTableStyle.css'

class CardTable extends Component {
  render() {
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
          <tr>
            <th scope="row">Lorent Ipsum</th>
            <td>Lorent Ipsum</td>
            <td>Lorent Ipsum</td>
            <td>Lorent Ipsum</td>
          </tr>
          <tr>
            <th scope="row">Lorent Ipsum</th>
            <td>Lorent Ipsum</td>
            <td>Lorent Ipsum</td>
            <td>Lorent Ipsum</td>
          </tr>
          <tr>
            <th scope="row">Lorent Ipsum</th>
            <td>Lorent Ipsum</td>
            <td>Lorent Ipsum</td>
            <td>Lorent Ipsum</td>
          </tr>
          <tr>
            <th scope="row">Lorent Ipsum</th>
            <td>Lorent Ipsum</td>
            <td>Lorent Ipsum</td>
            <td>Lorent Ipsum</td>
          </tr>
          <tr>
            <th scope="row">Lorent Ipsum</th>
            <td>Lorent Ipsum</td>
            <td>Lorent Ipsum</td>
            <td>Lorent Ipsum</td>
          </tr>
          <tr>
            <th scope="row">Lorent Ipsum</th>
            <td>Lorent Ipsum</td>
            <td>Lorent Ipsum</td>
            <td>Lorent Ipsum</td>
          </tr>
          <tr>
            <th scope="row">Lorent Ipsum</th>
            <td>Lorent Ipsum</td>
            <td>Lorent Ipsum</td>
            <td>Lorent Ipsum</td>
          </tr>
        </tbody>
      </table>
    </div>
    )
  }
}

export default CardTable;
