export const TodoList = ({ messageList, deleteTodo }) => (
  <ol id="todolist">
    {messageList.map((message, index) => (
      <Todo message={message} deleteTodo={deleteTodo} key={index} />
    ))}
  </ol>
);

const Todo = ({ message, deleteTodo }) => {
  const handleSubmit = (event) => {
    deleteTodo(message);
  };

  return (
    <li id="todo">
      <span id="todo__label">{message + "  "}</span>
      <button id="todo__delete" onClick={handleSubmit}>
        Delete
      </button>
    </li>
  );
};