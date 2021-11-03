import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ LoginPage } />
    </Switch>
  );
}

export default App;
