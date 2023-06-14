import React, { useState } from 'react';
import styles from './Todo.module.scss';

function Todo() {
  const [item, setItem] = useState('');
  const [todos, setTodos] = useState([]);

  const handleClick = () => {
    setTodos([...todos, item]);
    setItem('');
  }

  const handlechange = (e) => {
    setItem(e.target.value);
  }

  return (
    <div className={styles.container}>
      <div className={styles.todo}>
        <ul>
          {todos.map((todo) => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>
        <input type="text" value={item} onChange={handlechange} placeholder="todo" />
        <button onClick={handleClick} type="submit"> Submit</button>
      </div>
    </div>
  );
}

export default Todo;
