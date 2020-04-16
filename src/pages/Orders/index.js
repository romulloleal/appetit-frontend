import React, { Component } from 'react';
import SideBar from '../SideBar';
import Opened from './opened';

import './style.css';

export default class Orders extends Component {
  
  render() {
    return (
      <div className="grid">
        <SideBar></SideBar>
        <Opened></Opened>
      </div>
    );
  }
}