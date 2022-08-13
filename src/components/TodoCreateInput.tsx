import { ChangeEvent, FormEvent, InvalidEvent, useState, useContext } from 'react';
import { TodoListContext } from '../contexts/TodoListContext';
import { v4 as uuidv4 } from 'uuid';

import plusIcon from '../assets/plus-icon.svg';

import styles from './TodoCreateInput.module.css';

export function TodoCreateInput() {
  const [newTodoText, setNewTodoText] = useState('');
  const { addTodo } = useContext(TodoListContext);

  function handleNewTodoChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTodoText(event.target.value);
  }

  function handleCreateNewTodo(event: FormEvent) {
    event.preventDefault();

    const newTodo = {
      id: uuidv4(),
      isActive: false,
      description: newTodoText
    }

    addTodo(newTodo);

    setNewTodoText('')
  }

  function handleNewTodoInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('É necessário preencher o campo para criar uma nova Task!');
  }

  const isInputEmpty = newTodoText === '';

  return (
    <form onSubmit={handleCreateNewTodo} className={styles.form}>
      <div className={styles.inputGroup}>
        <div className={styles.inputLabel}>
          <label htmlFor='toDoItem'>Tarefa</label>
        </div>
        <input
          className={styles.input}
          id='toDoItem'
          placeholder='Adicione uma nova tarefa'
          value={newTodoText}
          onChange={handleNewTodoChange}
          onInvalid={handleNewTodoInvalid}
          required
        />
      </div>

      <button
        className={styles.submitButton}
        type='submit'
        disabled={isInputEmpty}
      >
        Criar
        <img src={plusIcon} alt="Icone de adição" />
      </button>
    </form>
  );
}