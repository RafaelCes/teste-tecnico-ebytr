import React, { useState } from 'react';
import Login from '../components/Login';
import Register from '../components/Register';

export default function LoginPage() {
  const [register, setRegister] = useState('false');
  
  return (
    <div>
      <h1> bem vindo!</h1>
      {register ? <Login /> : <Register /> }
      <button type="button" onClick={ () => setRegister(!register) }>
        {register ? 'cadastrar-se' : 'logar-se'}
      </button>
    </div>
  );
}
