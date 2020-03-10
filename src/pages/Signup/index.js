import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';
import logo from '../../assets/logo.svg';

export default function Signup() {
  return (
    <>
      <img src={logo} alt="Gobarber" />
      <form>
        <input placeholder="Nome Completo" />
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha secreta" />

        <button type="submit">Criar Conta</button>
        <Link to="/">Já tenho login</Link>
      </form>
    </>
  );
}
