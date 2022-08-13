import { useContext } from 'react';
import { TodoListContext } from '../contexts/TodoListContext';

import trash from '../assets/trash.svg';

import styles from './Todo.module.css';

interface TodoProps {
  id: string;
  description: string;
  isActive: boolean;
}

export function Todo({
  id,
  description,
  isActive
}: TodoProps) {
  const { handleChangeActivationTodoItem, removeTodo } = useContext(TodoListContext);

  return (
    <div className={!isActive ? styles.todoEnable : styles.todoDisabled}>
      <div className={styles.customCheckbox}>
        <input
          id={`todoStatus-${id}`}
          name={`todoStatus-${id}`}
          checked={isActive}
          type="checkbox" 
          onChange={() => handleChangeActivationTodoItem(id)}
        />
        <label htmlFor={`todoStatus-${id}`} />
      </div>

      <p className={!isActive ? styles.descriptionEnable : styles.descriptionDisabled}>{description}</p>

      <button onClick={() => removeTodo(id)} className={styles.deleteToDoButton}>
        <img src={trash} alt="Lixeira" />
      </button>
    </div>
  );
}