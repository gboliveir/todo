import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import plusIcon from '../assets/plus-icon.svg';

import styles from './TodoCreateInput.module.css';

export function TodoCreateInput() {
  const [newTodoText, setNewTodoText] = useState('');

  function handleNewTodoChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTodoText(event.target.value);
  }

  function handleCreateNewTodo(event: FormEvent) {
    event.preventDefault();

    // setComments([...comments, newCommentText]);
    setNewTodoText('')
  }

  function handleNewTodoInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Campo obrigatório!');
  }

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
      >
        Criar
        <img src={plusIcon} alt="Icone de adição" />
      </button>
    </form>
  );
}