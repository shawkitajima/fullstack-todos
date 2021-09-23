import {useState, useEffect} from 'react';
import * as todosAPI from './utilities/todos-api';
import './App.css';

function App() {

  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({todo: '', completed: false});
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    todosAPI.index().then(res => setTodos(res));
  }, [trigger]);

  function handleAddTodo() {
    todosAPI.create(todo).then(res => {
      setTrigger(!trigger);
      setTodo({todo: '', completed: false});
    })
  }

  function handleUpdateTodo(idx) {
    const todoToUpdate = {...todos[idx]};
    todoToUpdate.completed = !todoToUpdate.completed;
    todosAPI.update(todoToUpdate._id, todoToUpdate).then(res => {
      setTrigger(!trigger);
    })
  }

  function handleDelete(id) {
    todosAPI.deleteTodo(id).then(res => setTrigger(!trigger));
  }

  return (
    <div className="App">
      <h2>Add a todo</h2>
      <div>
        <input 
          type="text" 
          value={todo.todo} 
          onChange={evt => setTodo({...todo, todo: evt.target.value})} 
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      {!!todos.length && (
        <div>
          <h1>All Todos</h1>
          <table>
            <thead>
              <tr>
                <th>Todo</th>
                <th>Completed?</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo, idx) => (
                <tr key={todo._id}>
                  <td style={{color: todo.completed ? 'green': 'red'}}>{todo.todo}</td>
                  <td onClick={() => handleUpdateTodo(idx)}>{todo.completed ? 'yuppers' : 'nopesies'}</td>
                  <td><button onClick={() => handleDelete(todo._id)}>X</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
    </div>
  );
}

export default App;
