import React, { useState } from 'react';
import Login from '../components/Login';

export default function loginPage() {
  const[register, setRegister] = useState('false')
  return (
    <div>
      <h1> bem vindo!</h1>
      {register ? <Login /> :"cadastro" }
      <button type="button" onClick={() => setRegister(!register)}>{register ? 'cadastrar-se' : 'login'}</button>
    </div>
  );
}
