import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import './styles.css';
import Input from '../../components/Input';
import { FiEye } from 'react-icons/fi';

function Login() {
  return (
    <div id="page-login">
      <div className="lateral-view">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>
      </div>
      <div className="page-login-container">
        <div className="page-login-content">
          <form>
            <h1>Fazer login</h1>
            <div className="input-container">
              <Input name="email" placeholder="Email" />
              <Input
                name="password"
                placeholder="Senha"
                hide
                icon={FiEye}
              />
            </div>
            <button type="button">Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
