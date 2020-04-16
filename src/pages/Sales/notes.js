import React, { Component } from 'react';

import api from '../../services/api';

import { Link } from 'react-router-dom';

import BackIcon from '../../assets/icons/back.png';
import AddIcon from '../../assets/icons/add.png';
import RemoveIcon from '../../assets/icons/remove.png';
import Profile from '../../assets/profiles/romullo.png';

export default class Notes extends Component {
  state = {
    products: [],
    qtt: 1,
    productId: '',
    opt: ''
  }

  // remove quantidade do produto
  removeQtt = () => {
    // eslint-disable-next-line eqeqeq
    if (this.state.qtt == 1) {

    } else {
      this.setState({ qtt: this.state.qtt - 1 })
    }
  }

  // adiciona mais quantidade ao produto
  addQtt = () => {
    this.setState({ qtt: this.state.qtt + 1 })
  }

  // adiciona produto ao carrinho
  addProduct = () => {
    // localStorage.setItem('@cart/qtt', this.state.qtt);
    // localStorage.setItem('@cart/opt', this.state.opt);
    // localStorage.setItem('@cart/productId', this.state.productId);
    this.props.history.push('/neworder');
  }

  async componentDidMount() {
    const response = await api.get('products');

    this.setState({ products: response.data });
  }
  render() {

    const { products } = this.state;
    const idProduct = this.props.match.params.idProduct;
    // eslint-disable-next-line no-unused-vars
    let productValue = 0;
    
    return (
      <div className="notes">
        <Link to="/neworder"><img src={BackIcon} alt="Voltar" /></Link>
        <img src={Profile} className="profile round-picture" alt="Perfil" />
        <h3 className="title">Detalhes do Pedido</h3>
        Aproveite para adicionar alguma observação para este pedido, caso queira.
        {
          products.filter(product => product.id.includes(idProduct)).map(filteredProduct => (
            <div>
              <div className="product">
                <img src={filteredProduct.img} className="round-picture" alt={filteredProduct.productName} />
                <div className="product-content">
                  <h6>{filteredProduct.productName}</h6>
                R$ {filteredProduct.value}
                </div>
              </div>

              <h6>Opções</h6>
              Escolha dentre as opções de massas abaixo.
              <form onSubmit={this.addProduct}>
                <div>
                  {
                    filteredProduct.options.map((option, key) => (
                      <div className="product-options">
                        <input type="radio" name="option" onInput={(e) => this.setState({ opt: e.target.value })} id={'option' + key} value={option.option} required />
                        <label for={'option' + key}>{option.option}</label>
                      </div>
                    ))
                  }
                  <div className="separator"></div>

                  <span class="float-label">
                    <input type="text" name="details" id="second" placeholder="Observações" />
                    <label for="second">Observações</label>
                  </span>
                </div>
                <div className="separar"></div>
                <div className="add-product">

                  <div className="button-add">
                    <img src={RemoveIcon} alt="Remover" className="add-remove" onClick={this.removeQtt} />
                    <span>{this.state.qtt}</span>
                    <img src={AddIcon} alt="Adicionar" className="add-remove" onClick={this.addQtt} />
                  </div>

                  <button className="btn-small radius-small bg-orange" type="submit" onClick={() => this.setState({ productId: idProduct })}>
                    Adicionar
                  <span>
                      RS {productValue = (this.state.qtt * filteredProduct.value).toFixed(2).replace(".", ",")}
                      {}
                    </span>
                  </button>

                </div>

              </form>
            </div>
          ))
        }
      </div>
    );
  }
}