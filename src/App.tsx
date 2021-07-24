import React, { useState } from "react";
import "./App.css";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";

interface ITodos {
  id: number;
  todo: string;
  isCompleted: boolean;
}

type TSubmit = (e: React.FormEvent<HTMLFormElement>) => void;

function App() {
  const [todos, setTodos] = useState<ITodos[]>([]);
  const [todo, setTodo] = useState<string>("");

  const handleSubmit: TSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: todos.length,
        todo: todo,
        isCompleted: false,
      },
    ]);
    setTodo("");
  };

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = parseInt(e.target.value);
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: true };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <Container>
        <Header />
        <TodoForm handleSubmit={handleSubmit} todo={todo} setTodo={setTodo} />
        <TodoList
          todos={todos}
          handleCheck={handleCheck}
          deleteTodo={deleteTodo}
        />
      </Container>
    </div>
  );
}

export default App;
