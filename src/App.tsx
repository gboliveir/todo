import logoImg from './assets/logo.svg';
import plusIcon from './assets/plus-icon.svg';
import clipboard from './assets/clipboard.svg';
import trash from './assets/trash.svg';

import styles from './App.module.css';

export function App() {
  return (
    <>
      <header className={styles.header}>
        <img src={logoImg} alt="Logomarca" />
      </header>

      <main>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <div className={styles.inputLabel}>
              <label htmlFor='toDoItem'>Tarefa</label>
            </div>
            <input className={styles.input} id='toDoItem' placeholder='Adicione uma nova tarefa' />
          </div>

          <button className={styles.submitButton} type='submit'>
            Criar
            <img src={plusIcon} alt="Icone de adição" />
          </button>
        </form>

        <div className={styles.toDoListContainer}>
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

          <div className={styles.todo}>
            <div className={styles.customCheckbox}>
              <input id="todoStatus" name='todoStatus' type="checkbox" />
              <label htmlFor="todoStatus" />
            </div>
            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            <img src={trash} alt="Lixeira" />
          </div>
        </div>
      </main>
    </>
  )
}


/*
  <div className={styles.empty}>
    <img src={clipboard} alt="Imagem de caderneta" />
    <p className={styles.emptyTopParagraph}>Você não tem tarefas cadastradas</p>
    <p className={styles.emptyBottomParagraph}>Crie tarefas e organize seus itens a fazer</p>
  </div>
*/
