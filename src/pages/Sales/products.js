import React, { Component } from 'react';

import api from '../../services/api';

import { Link } from 'react-router-dom';

import ProgressBar from './progress';

import arrowRightIcon from '../../assets/icons/arrow_right.png';
import SearchIcon from '../../assets/icons/search.png';
import Profile from '../../assets/profiles/romullo.png';

export default class Products extends Component {
  state = {
    products: [],
  }

  async componentDidMount() {
    const response = await api.get('products');

    this.setState({ products: response.data });
  }

  render() {

    const { products } = this.state;

    return (

      <div className="products">
        <img src={Profile} className="profile round-picture" alt="Perfil" />
        <h3 className="title">Informações para o Pedido</h3>
        Preencha as informações abaixo para concluir esta venda.

        <ProgressBar initialProgres={1} />

        <h6>O que voê está vendendo?</h6>
        <form className="search-order">
          <img src={SearchIcon} alt="Procurar roduto" /> <input type="seacrh" name="searchOrder" placeholder="Procure o produto aqui..." />
        </form>

        <div className="products-list">
          {
            products.map((product, key) => (
              <Link to={'/neworder/notes/' + product.id} className="product-details" key={key}>
                <img src={product.img} className="round-picture" alt="{product.productName}" />
                <div className="product-content">
                  <h6>{product.productName}</h6>
                  R$ {product.value}
                </div>
              </Link>
            ))
          }
          <Link to="/neworder/selectuser" className="box">
            <span>
              Total: 3,25
            </span>
            <span className="avancar">
              Avançar<img src={arrowRightIcon} alt="Avançar" />
            </span>
          </Link>
        </div>
      </div >
    );
  }
}