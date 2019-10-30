import React, { Component } from 'react';
import styles from '../../assets/css/components/Card/CardTableStyle.css'

class CardTable extends Component {
  render() {
    return (

      <table className="table table-hover">
        <thead className="text-black-50">
          <tr>
            <th scope="col">Actividades</th>
            <th scope="col">Actividades</th>
            <th scope="col">Actividades</th>
            <th scope="col">Actividades</th>
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
    )
  }
}

export default CardTable;
