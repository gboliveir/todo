import logoImg from './assets/logo.svg';

import styles from './Header.module.css';

export function App() {
  return (
    <header className={styles.header}>
      <img src={logoImg} alt="Logomarca" />
    </header>
  )
}
