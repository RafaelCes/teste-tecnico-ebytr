import React from 'react';
import Login from '../components/Login';

export default function loginPage() {
  return (
    <div>
      <h1> bem vindo!</h1>
      <Login />
      <br />
      <button type="button">cadastrar-se</button>
    </div>
  );
}
