
import React, { useState, useEffect } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

export const loadingContext = React.createContext();

export default function TaskListPage() {
  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState('data');

  useEffect(() => {
    setIsAdding(false);
  }, [loading]);

  return (
    <div>
      <loadingContext.Provider value={ { loading, setLoading, order } }>
        {loading ? 'loading' : ''}
        <TaskList />
        {!isAdding ? '' : <TaskForm />}
        <button type="button" onClick={ () => setIsAdding(!isAdding) }>
          Nova Tarefa
        </button>
        <select id="order" onChange={ (e) => setOrder(e.target.value) }>
          <option value="data">Data de criação</option>
          <option value="alfabetica">Alfabetica</option>
          <option value="status">Status</option>
        </select>
      </loadingContext.Provider>
    </div>
  );

}
