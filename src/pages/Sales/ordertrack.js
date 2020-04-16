import React, { Component } from 'react';

import api from '../../services/api';

import { Link } from 'react-router-dom';

import BackIcon from '../../assets/icons/back.png';
import ChefIcon from '../../assets/icons/chef.png';

export default class OrderTrack extends Component {
  render() {
    return (
      <div className="order-track">
        <Link to="/orders"><img src={BackIcon} alt="Voltar" /></Link>
        <h3 className="title">Novo Pedido</h3>
        <div className="chef">
          <img src={ChefIcon} alt="" />
          Acompanhe aqui um resumo desta venda.
        </div>
      </div>
    );
  }
}