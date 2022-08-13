import { useContext } from 'react';
import { TodoListContext } from '../contexts/TodoListContext';

import { Todo } from './Todo';
import { Empty } from './Empty';

import styles from './TodoList.module.css';

export function TodoList() {
  const { todoList } = useContext(TodoListContext);
  
  const listIsGreaterThanZero = todoList.length > 0;

  function countCompletedTasks() {
    const numberOfTasksCompleted = todoList.reduce(
      (previousValue, currentValue, index, array) => {
        if (currentValue.isActive) {
          return previousValue + 1;
        }

        return previousValue;
      }, 0);

    return numberOfTasksCompleted;
  }

  return (
    <div className={styles.wrapper}>
      <header className={styles.toDoListHeader}>
        <span>
          Tarefas criadas
          <div className={styles.toDoCount}>
            {todoList.length}
          </div>
        </span>
        <span>
          Concluidas
          <div className={styles.toDoCount}>
            {`${countCompletedTasks()} de ${todoList.length}`}
          </div>
        </span>
      </header>
      
      <main>
        {listIsGreaterThanZero ? (  
          todoList.map(todo => {
            return (
              <Todo
                key={todo.id}
                id={todo.id}
                description={todo.description}
                isActive={todo.isActive}
              /> 
            );
          })
        ) : (
          <Empty />
        )}
      </main>
    </div>
  );
}