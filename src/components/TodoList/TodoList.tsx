import React from "react";

interface ITodos {
  id: number;
  todo: string;
  isCompleted: boolean;
}

interface IProps {
  filteredTodos: ITodos[];
  handleCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
  deleteTodo: (id: number) => void;
  setEditTodo:(todo:ITodos)=>void;
  filterTodo:(q:string)=>void;
  manuActive:string;
}
const TodoList = ({ filteredTodos, handleCheck, deleteTodo, setEditTodo, filterTodo, manuActive }: IProps) => {
  return (
    <div className="todo-container">
      <div className="todo-header">
        <ul>
          <li className={manuActive==='all'? "active":""} onClick={()=>filterTodo('all')} >All</li>
          <li className={manuActive==='pedning'? "active":""} onClick={()=>filterTodo('pedning')}>Pending</li>
          <li className={manuActive==='completed'? "active":""} onClick={()=>filterTodo('completed')}>Completed</li>
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
            {filteredTodos.length > 0 ? (
              filteredTodos.map(({ id, todo, isCompleted }, i) => (
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
                  <td className={isCompleted ? "done-todo" : "todo"}>{todo}</td>
                  <td width="150px">
                    <div className="btn-group">
                      <button onClick={()=>setEditTodo({ id, todo, isCompleted })} disabled={isCompleted} className={`${isCompleted ? "btn-disabled" : ""} btn-edit`}>
                        Edit
                      </button>
                      <button
                        disabled={!isCompleted}
                        onClick={() => deleteTodo(id)}
                        className={`${isCompleted ? "" : "btn-disabled"} btn-delete`}
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
