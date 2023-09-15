import { useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'learn React', completed: true },
    { id: 2, text: 'it works now!', completed: false }
  ]);
  const input = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: todos.length + 1,
      text: input.current.value,
      completed: false
    };
    setTodos([...todos, newTodo]);
    input.current.value = '';
  }
  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }
  return (
    <>
      <h1 className='text-center'>Todo app</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={input}
          className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
        />
        <button
          type="submit"
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          add
        </button>
      </form>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>{todo.text}  <button onClick={() => removeTodo(todo.id)} className='ml-5 bg-blue-500 text-white font-bold py-2 px-2 rounded'>
            remove
          </button></li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
