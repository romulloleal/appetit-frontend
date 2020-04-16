import React, { Component } from 'react';

export default class Progress extends Component {
  render() {
    let initialProgres = (100 / 3) * this.props.initialProgres;
    let style = { width: initialProgres + '%'}
    return (
      <div className="progress-bar">
        Passo {this.props.initialProgres} de 3
        <div className="progress">
          <span  className="bar" style={style}></span>
        </div>
      </div>
    );
  }
}