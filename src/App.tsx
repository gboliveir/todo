import logoImg from './assets/logo.svg';
import plusIcon from './assets/plus-icon.svg';

import styles from './Header.module.css';

export function App() {
  return (
    <>
      <header className={styles.header}>
        <img src={logoImg} alt="Logomarca" />
      </header>

      <main>
        <form className={styles.toDoForm}>
          <div>
            <div className={styles.toDoLabel}>
              <label htmlFor='toDoItem'>Tarefa</label>
            </div>
            <input className={styles.toDoInput} id='toDoItem' placeholder='Adicione uma nova tarefa' />
          </div>

          <button className={styles.toDoBtn} type='submit'>
            Criar
            <img src={plusIcon} alt="Icone de adição" />
          </button>
        </form>
      </main>
    </>
  )
}
