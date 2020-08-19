import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import './styles.css';

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
              <input type="text" />
              <input type="text" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
