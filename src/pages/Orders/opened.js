import React, { Component } from 'react';

import api from '../../services/api';

import { Link } from 'react-router-dom';

import AddIcon from '../../assets/icons/add.png';
import SearchIcon from '../../assets/icons/search.png';
import FilterIcon from '../../assets/icons/filter.png';

import Profile from '../../assets/profiles/romullo.png';

export default class Opened extends Component {
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
    return (
      <div className="orders" >
        <img src={Profile} className="profile round-picture" alt="Perfil" />
        <h3 className="title">Olá, Romullo!</h3>

        <Link className="new-order" to="/neworder">
          <img src={AddIcon} alt="Novo Pedido" /> Fazer Novo Pedido
        </Link>

        <form className="search-order">
          <img src={SearchIcon} alt="Procurar Pedidos" /> <input type="seacrh" name="searchOrder" placeholder="Procure o pedido aqui..." /> <img src={FilterIcon} alt="Filtrar Pedidos" />
        </form>

        {
          orders.map((order) => (
            customers.filter(customer => customer.id.includes(order.customerId)).map(filteredCostumer => (
              <div className="orders-history">
                {/* <h6>13/05/2019</h6>, Você vendeu <h6> </h6> */}
                <Link className="order-detail" to={'/orders/details/' + filteredCostumer.id}>
                  <img src={filteredCostumer.img} className="round-picture" alt="Perfil" />
                  <div className="content">
                    <span>
                      <h6>
                        {filteredCostumer.name}
                      </h6>
                      <caption>{order.detail}</caption>
                    </span>
                    <h6 className="value">R$ {order.value}</h6>
                  </div>
                </Link>
              </div>
            ))
          ))
        }
      </div >
    );
  }
}