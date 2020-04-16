import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../assets/logo-white.svg'
import ListIcon from '../../assets/icons/list.png';
import UserIcon from '../../assets/icons/user.png';

import './style.css';


export default class SideBar extends Component {

  render() {
    return (
      <div className="side-bar bg-orange">
        <img src={Logo} alt="Appetit" className="logo" />

        <ul>
          <li>
            <div className="menu active"><img src={ListIcon} alt="Pedidos" /> Pedidos</div>
            <div className="sub-menu">
              <NavLink activeClassName="selected" to="/orders">Em Abertos</NavLink>
              <NavLink activeClassName="selected" to="/closedorders">Encerrados</NavLink>
            </div>
          </li>
          <li>
            <div className="menu"><img src={UserIcon} alt="Clientes" /> Clientes</div>
          </li>
        </ul>

        <footer>Infoway Gestão em Saúde ©, 2019.</footer>
      </div>
    );
  }
}