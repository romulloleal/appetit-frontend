import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../SideBar';

import api from '../../services/api';

import Profile from '../../assets/profiles/romullo.png';
import BackIcon from '../../assets/icons/back.png';

export default class Details extends Component {
  state = {
    orders: [],
    customers: []
  }

  async componentDidMount() {
    const responseOrders = await api.get('orders');
    const responseCustomers = await api.get('customers');

    this.setState({ orders: responseOrders.data, customers: responseCustomers.data });
  }
  render() {
    const { orders } = this.state;
    const { customers } = this.state;
    let idCustomer = this.props.match.params.idCustomer;

    return (
      <div className="grid">
        <SideBar></SideBar>
        <div className="orders">
          <img src={Profile} className="profile round-picture" alt="Perfil" />
          <Link to="/orders" className="arrowBack"><img src={BackIcon} alt="Voltar" /></Link>

          {/* RETURNS CUSTOMER NAME */}
          {
            customers.filter(customer => customer.id.includes(idCustomer)).map(filteredCustomer => (
              <h3 className="title">Pedidos de {filteredCustomer.name}</h3>
            ))
          }

          {/* RETURN CUSTOMER ORDERS */}
          {
            orders.filter(order => order.customerId.includes(idCustomer)).map(filteredOrder => (
              <div className="orders-history">
                <div className="date">
                  <h6>{filteredOrder.date}</h6>
                </div>
                <div className="order-detail">
                  <img src={filteredOrder.img} className="round-picture" alt="Perfil" />
                  <div className="content">
                    <span>
                      <h6>
                        {filteredOrder.detail}
                      </h6>
                      <caption>R$ {filteredOrder.value}</caption>
                    </span>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}