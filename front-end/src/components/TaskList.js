import React, { useEffect, useState, useContext } from 'react';
import { todoContext } from '../pages/TaskListPage';
import UpdateTask from './UpdateTask';

export default function TaskList() {
  const NEG = -1;
  const [isEditing, setIsEditing] = useState(NEG); // informa se alguma tarefa esta sendo editada
  const [sortedList, setSortedList] = useState([]); // guarda a lista de tarefas ordenada
  const {
    setLoading,
    order,
    taskList,
    fetchTasks,
  } = useContext(todoContext);

  // busca as tarefas quando o componente é montado
  useEffect(() => {
    const getData = async () => {
      await fetchTasks();
    };
    getData();
    setLoading(false);
    setIsEditing(NEG);
  }, []);

  // faz a requisição para excluir uma tarefa do banco de dados
  const deleteTask = async (id) => {
    await fetch(`http://localhost:3001/tasks/${id}`, {
      method: 'DELETE',
      headers: {
        'content-Type': 'application/json',
        authorization: localStorage.getItem('token'),
      },
    });
    fetchTasks();
  };

  // ordena a lista de tarefas de acordo com o estado selecionado
  const orderList = () => {
    if (order === 'alfabetica') {
      return setSortedList(taskList
        .sort((a, b) => ((a.title > b.title) ? 1 : ((b.title > a.title) ? NEG : 0))));
    }
    if (order === 'status') {
      return setSortedList(taskList
        .sort((a, b) => ((a.status > b.status) ? 1 : ((b.status > a.status) ? NEG : 0))));
    }
    if (order === 'data') {
      return setSortedList(taskList
        .sort((a, b) => ((a.title > b.date) ? 1 : ((b.title > a.date) ? NEG : 0))));
    }
  };

  //escuta a mudança de estado da ordem da lista ou da propia lista
  useEffect(() => {
    orderList();
    setLoading(true);
  }, [order, taskList]);

  return (
    <ul style={ { listStyleType: 'none' } }>
      {sortedList.map((task, index) => {
        const { _id: id } = task;
        return (
          <li key={ id }>
            { isEditing === index
              ? <UpdateTask id={ id } setIsEditing={ setIsEditing } />
              : <div>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <p>
                  status:
                  {task.status}
                </p>
                <button type="button" onClick={ () => setIsEditing(index) }>
                  editar
                </button>
              </div>}
            <button type="button" onClick={ () => deleteTask(id) }>Excluir</button>
          </li>);
      })}
    </ul>
  );
}
