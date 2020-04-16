import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

import Logo from '../../assets/logo.svg';

export default class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  handleLogin = () => {
    this.props.history.push('/orders');
  };
  render() {
    return (
      <div className="login-container">
        <img src={Logo} alt="Appetit" />
        <form>
          <h3>Seja bem-vindo!</h3>

          <p>Nós sabemos a importância de estar sempre de barriga cheia e o quanto isso pode ajudar no seu dia.</p>

          <span class="float-label">
            <input type="email" name="email" id="first" placeholder="Email" value={this.state.email} onChange={this.handleChange} autoComplete="off" />
            <label for="first">Email</label>
          </span>

          <span class="float-label">
            <input type="password" name="password" id="second" placeholder="Senha" value={this.state.password} onChange={this.handleChange} />
            <label for="second">Senha</label>
          </span>
          <Link to="#">Recuperar minha senha</Link>
          <button className="btn-big bg-orange" type="submit" disabled={!this.state.email || !this.state.password} onClick={this.handleLogin}>Entrar</button>
        </form>

        <footer>Infoway Gestão em Saúde ©, 2019.</footer>
      </div>
    );
  }
}