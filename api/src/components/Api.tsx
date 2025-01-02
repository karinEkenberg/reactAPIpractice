import React from "react";
import { useState, useEffect } from "react";

export default function Api() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState({});

  interface Todo {
    title: string;
    completed: boolean;
    id: number;
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((res) => setTodos(res.slice(0, 10)))
      .catch((error) => setError(error));
  }, []);
  return (
    <div>
      <h1>API Data</h1>
      {Object.keys(error).length > 0 ? (
        <p style={{ color: "red" }}>Error: {error.message}</p>
      ) : (
        <div>
          {todos.length > 0 ? (
            <ul>
              {todos.map((todo: Todo) => (
                <li key={todo.id}>
                  {todo.title} 
                  <span
                    style={{
                      color: todo.completed ? "green" : "red",
                    }}
                  >
                    {todo.completed ? "Completed" : "Not Completed"}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      )}
    </div>
  );
}
