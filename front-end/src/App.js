import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import loginPage from './pages/loginPage';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ loginPage } />
    </Switch>
  );
}

export default App;
