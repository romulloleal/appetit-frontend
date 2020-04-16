import React, { Component } from 'react';
import SideBar from '../SideBar';

import Profile from '../../assets/profiles/romullo.png';

export default class Closed extends Component {

  render() {
    return (
      <div className="grid">
        <SideBar></SideBar>
        <div className="orders">
          <img src={Profile} className="profile round-picture" alt="Perfil" />
          <h3 className="title">Olá, Romullo!</h3>
          <h1>Nothing here yet!</h1>
        </div>
      </div>
    );
  }
}