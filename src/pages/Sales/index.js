import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';
import './style.css';

import { Link } from 'react-router-dom';
import BackIcon from '../../assets/icons/back.png';

import SideBar from '../SideBar';
import OrderTrack from './ordertrack';
import Products from './products';
import Notes from './notes';

export default class NewOrder extends Component {
  render() {
    return (
      <div className="grid" >
        <SideBar></SideBar>
        <div className="sales">
          <OrderTrack></OrderTrack>
          <div className="cart">
            <Link to="/orders" className="only-mobile"><img src={BackIcon} alt="Voltar" /></Link>
            <BrowserRouter>
              <Switch>
                <Route path="/neworder" exact component={Products} />
                <Route path="/neworder/notes/:idProduct" component={Notes} />
              </Switch>
            </BrowserRouter>
          </div>
        </div>
      </div >
    );
  }
}