import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import TaskListPage from './pages/TaskListPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ LoginPage } />
        <Route exact path="/tasks" component={ TaskListPage } />
      </Switch>
    </div>
  );
}

export default App;
