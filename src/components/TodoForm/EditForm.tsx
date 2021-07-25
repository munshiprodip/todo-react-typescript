import React from "react";

type Todo = {
    id: number;
    todo: string;
    isCompleted: boolean;
}
interface IProps {
  handleSubmitEdit: (e: React.FormEvent<HTMLFormElement>) => void;
  editTodo: Todo;
  setEditTodo: (todo: Todo) => void;
}

const EditForm = ({ handleSubmitEdit, editTodo, setEditTodo }: IProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTodo({
        ...editTodo,
        todo:e.target.value,
    });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmitEdit}>
        <div className="form-group"> 
          <input
            type="text"
            name="todo"
            id="todo"
            value={editTodo.todo}
            className="text-input"
            onChange={handleInputChange}
          />
          
          <button type="submit" className="btn-submit">
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
