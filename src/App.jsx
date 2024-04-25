import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoHeader } from './assets/components/TodoHeader.jsx'
import { TodoForm } from './assets/components/TodoForm.jsx'
import { TodoList } from './assets/components/TodoList.jsx'
import { TodoSearch } from './assets/components/TodoSearch.jsx'



  const App = () => {
    const [messageList, setMessageList] = useState(["Learn React","Buy Hans Thermomix","Get a job"]);
    
    const addTodo = (message) => {
      setMessageList([...messageList, message]);
    };
  
    const deleteTodo = (messageToDelete) => {
      const updateMessageList = messageList.filter(message => message !== messageToDelete)
      setMessageList(updateMessageList)
    };
  
    return (
      <div className="app">
        <TodoSearch todos={messageList} />
        <TodoHeader />
        <TodoForm addTodo={addTodo} /> <br /> 
        <TodoList messageList={messageList} deleteTodo={deleteTodo} />
        
      </div>
    );
  };
  
export default App
