import React from 'react'
import { BiTrash } from "react-icons/bi";

export const TodoList = ({ messageList, deleteTodo }) => (
  <ol className="todo__list">
    {messageList.map((message, index) => (
      <Todo message={message} deleteTodo={deleteTodo} key={index} />
    ))}
  </ol>
);

const Todo = ({ message, deleteTodo }) => {
  const handleDelete = () => {
    deleteTodo(message);
  };

  return (
    <li className="todo">
      <span className="todo__label">{message}</span>
      <button className="todo__delete" onClick={handleDelete}>
      <BiTrash />
      </button>
    </li>
  );
};