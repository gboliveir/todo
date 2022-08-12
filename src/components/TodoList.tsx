import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { Todo } from './Todo';
import { Empty } from './Empty';

import styles from './TodoList.module.css';

const initialTodoList = [
  {
    id: uuidv4(),
    isActive: true,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, doloremque dolor facilis ipsum voluptatem nihil ex dicta earum aliquid in temporibus doloribus amet nobis facere error unde eius porro quia!'
  },
  {
    id: uuidv4(),
    isActive: true,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, doloremque dolor facilis ipsum voluptatem nihil ex dicta earum aliquid in temporibus doloribus amet nobis facere error unde eius porro quia!'
  }
]

export function TodoList() {
  const [todoList, setTodoList] = useState(initialTodoList);

  function handleChangeActivationTodoItem(id: string) {
    const newTodoList = todoList.map(todo => {
      if (todo.id === id) {
        return { ...todo, isActive: !todo.isActive }
      }

      return todo;
    });
    
    setTodoList(newTodoList);
  }

  return (
    <div className={styles.wrapper}>
      <header className={styles.toDoListHeader}>
        <span>
          Tarefas criadas
          <div className={styles.toDoCount}>0</div>
        </span>
        <span>
          Concluidas
          <span className={styles.toDoCount}>0</span>
        </span>
      </header>
      
      <main>
        {todoList.length > 0 ? (  
          todoList.map(todo => {
            return (
              <Todo
                key={todo.id}
                id={todo.id}
                description={todo.description}
                isActive={todo.isActive}
                onChangeActivationTodoItem={handleChangeActivationTodoItem}
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