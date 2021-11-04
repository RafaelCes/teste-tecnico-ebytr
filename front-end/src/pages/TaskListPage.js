import React, { useState, useEffect } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

export const loadingContext = React.createContext();

export default function TaskListPage() {
  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsAdding(false)
  }, [loading])

  return (
    <div>
      <loadingContext.Provider value={[loading, setLoading]} >
      {loading? 'loading' : ''}
      <TaskList /> 
      {!isAdding ? '' : <TaskForm />}
      <button type="button" onClick={() => setIsAdding(!isAdding)}>
        Nova Tarefa
        </button>
      </loadingContext.Provider>
    </div>
  );
}
