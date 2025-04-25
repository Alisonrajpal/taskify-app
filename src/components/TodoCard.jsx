import React from "react";

function TodoCard(props) {
  const { todo, handleDelete, todoIndex, handleCompleteTodo } = props;

  return (
    <div className="card todo-item">
      <p>{todo.input}</p>
      <div className="todo-buttons">
        <button
          onClick={() => {
            handleCompleteTodo(todoIndex);
          }}
          disabled={todo.complete}>
          <h6>Done</h6>
        </button>
        <button
          onClick={() => {
            handleDelete(todoIndex);
          }}>
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  );
}

export default TodoCard;
