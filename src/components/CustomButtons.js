import React, { Component } from 'react';
import styles from '../assets/css/components/CustomButtonsStyle.css'

class CustomButtons extends Component {
  render() {
    return (

      <div className="my-3">
          <button type="button" className="btn-trainfes">{ this.props.button }</button>
      </div>

    )
  }
}

export default CustomButtons;
