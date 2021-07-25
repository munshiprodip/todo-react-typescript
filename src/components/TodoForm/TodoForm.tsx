import React from "react";

interface IProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  todo: string;
  setTodo: (todo: string) => void;
}

const TodoForm = ({ handleSubmit, todo, setTodo }: IProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="todo"
            id="todo"
            value={todo}
            placeholder="Type your task"
            className="text-input"
            onChange={handleInputChange}
          />
          <button type="submit" className="btn-submit">
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
