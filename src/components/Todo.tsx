import trash from '../assets/trash.svg';

import styles from './Todo.module.css';

interface TodoProps {
  id: string;
  description: string;
  onChangeActivationTodoItem: (id: string) => void;
  isActive: boolean;
}

export function Todo({
  id,
  description,
  onChangeActivationTodoItem,
  isActive
}: TodoProps) {
  return (
    <div key={id} className={styles.todo}>
      <div className={styles.customCheckbox}>
        <input
          id="todoStatus"
          name='todoStatus'
          checked={isActive}
          type="checkbox" 
          onChange={() => onChangeActivationTodoItem(id)}
        />
        <label htmlFor="todoStatus" />
      </div>

      <p>{description}</p>

      <button className={styles.deleteToDoButton}>
        <img src={trash} alt="Lixeira" />
      </button>
    </div>
  );
}