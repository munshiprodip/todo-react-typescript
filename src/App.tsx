import React, { useState } from "react";
import "./App.css";
import Container from "./components/Container/Container";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import EditForm from "./components/TodoForm/EditForm";
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
  const [filteredTodos, setFilteredTodos] = useState<ITodos[]>(todos);
  const [todo, setTodo] = useState<string>("");
  const [editTodo, setEditTodo] = useState<ITodos>({id:0, todo:"", isCompleted:false});

  // filter todo
  const filterTodo = (q:string)=>{
    if(q==='completed'){
      const newFilteredTodo = todos.filter(todo=>todo.isCompleted===true)
      setFilteredTodos(newFilteredTodo)
    }else if(q==='pedning'){
      const newFilteredTodo = todos.filter(todo=>todo.isCompleted===false)
      setFilteredTodos(newFilteredTodo)
    }else{
      setFilteredTodos(todos)
    }
    
  }

  // new todo submit function
  const handleSubmit: TSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: todos.length+1,
        todo: todo,
        isCompleted: false,
      },
    ]);
    setFilteredTodos([
      ...todos,
      {
        id: todos.length+1,
        todo: todo,
        isCompleted: false,
      },
    ])
    setTodo("");
  };

  // update todo submit function
  const handleSubmitEdit: TSubmit = (e) => {
    e.preventDefault();
    const newTodos = todos.map((todo) => {
      if (todo.id === editTodo.id) {
        return { ...todo, todo: editTodo.todo };
      }
      return todo;
    });
    setTodos(newTodos);
    setFilteredTodos(newTodos)
    setEditTodo({id:0, todo:"", isCompleted:false})
  };

  // todo complete checkbox function
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = parseInt(e.target.value);
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: true };
      }
      return todo;
    });
    setTodos(newTodos);
    setFilteredTodos(newTodos)
  };

  // completed todo delete function
  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    setFilteredTodos(newTodos)
  };

  return (
    <div className="App">
      <Container>
        <Header />
        {
          editTodo.id===0
          ?
          <TodoForm handleSubmit={handleSubmit} todo={todo} setTodo={setTodo} />
          :
          <EditForm handleSubmitEdit={handleSubmitEdit} editTodo={editTodo} setEditTodo={setEditTodo} />
        }
        <TodoList
          filteredTodos={filteredTodos}
          handleCheck={handleCheck}
          deleteTodo={deleteTodo}
          setEditTodo={setEditTodo}
          filterTodo={filterTodo}
        />
        <Footer/>
      </Container>
    </div>
  );
}

export default App;
