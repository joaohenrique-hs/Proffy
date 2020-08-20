import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import './styles.css';
import Input from '../../components/Input';

function Login() {
  return (
    <div id="page-login">
      <div className="lateral-view">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online</h2>
        </div>
      </div>
      <div className="page-login-container">
        <div className="page-login-content">
          <h1>Fazer login</h1>
          <form>
            <div className="input-container">
              <Input name="email" placeholder="Email"></Input>
              <Input name="password" placeholder="Senha"></Input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
