import React from "react";

const Todo = ({ todo }) => {
  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.compeleted} readOnly />
      </label>
      {todo.name}
    </div>
  );
};

export default Todo;
