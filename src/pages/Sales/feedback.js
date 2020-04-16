import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import chefIcon from '../../assets/icons/chef.png';

import Profile from '../../assets/profiles/romullo.png';

import SideBar from '../SideBar';

export default class Opened extends Component {
  render() {
    return (
      <div className="grid">
        <SideBar></SideBar>
        <div className="feedback" >
          <img src={Profile} className="profile round-picture" alt="" />
          <img src={chefIcon} alt="Pedido Concluido" />
          <h4>Pedido feito com sucesso!</h4>
          <div className="options">

            <Link to="/orders">
              <div className="box-medium bg-white">
                voltar para lista de pedidos
              </div>
            </Link>

            <Link to="/neworder">
              <div className="box-medium bg-orange">
                FAZER NOVO PEDIDO
                </div>
            </Link>

          </div>

        </div>
      </div>
    );
  }
}