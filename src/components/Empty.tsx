import clipboard from '../assets/clipboard.svg';

import styles from './Empty.module.css';

export function Empty() {
  return (
    <div className={styles.empty}>
      <img src={clipboard} alt="Imagem de caderneta" />
      <p className={styles.emptyTopParagraph}>
        Você não tem tarefas cadastradas
      </p>
      <p className={styles.emptyBottomParagraph}>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  );
}