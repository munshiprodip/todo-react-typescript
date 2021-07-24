import React from "react";

interface ITodos {
  id: number;
  todo: string;
  isCompleted: boolean;
}

interface IProps {
  todos: ITodos[];
  handleCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
  deleteTodo: (id: number) => void;
}
const TodoList = ({ todos, handleCheck, deleteTodo }: IProps) => {
  return (
    <div className="todo-container">
      <div className="todo-header">
        <ul>
          <li>All</li>
          <li>Pending</li>
          <li>Completed</li>
        </ul>
      </div>
      <div className="todo-list">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Todo</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.length > 0 ? (
              todos.map(({ id, todo, isCompleted }, i) => (
                <tr key={i}>
                  <td width="50px">
                    <input
                      value={id}
                      onChange={handleCheck}
                      type="checkbox"
                      disabled={isCompleted}
                      checked={isCompleted}
                      id={`checkbox${id}`}
                    />
                  </td>
                  <td className={isCompleted ? "done-todo" : ""}>{todo}</td>
                  <td width="150px">
                    <div className="btn-group">
                      <button disabled={isCompleted} className="btn-edit">
                        Edit
                      </button>
                      <button
                        disabled={!isCompleted}
                        onClick={() => deleteTodo(id)}
                        className="btn-delete"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} style={{ textAlign: "center" }}>
                  No task available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;
