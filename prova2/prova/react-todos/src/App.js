import React, { useState, useEffect } from 'react';
import './App.css';

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
        const data = await response.json();
        setTodos(data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao procurar dados.', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="todos-container">
      {loading ? (
        <div className="loading-container">
          <img src="https://i.gifer.com/ZKZg.gif" alt="loading" />
        </div>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>User ID</th>
              <th>ID</th>
              <th>Title</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.userId}</td>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.completed ? <i className="bi bi-check2"></i> : null}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todos List</h1>
      </header>
      <main>
        <Todos />
      </main>
    </div>
  );
}

export default App;

