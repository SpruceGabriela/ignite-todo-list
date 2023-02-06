import Task from "../Task";
import styles from "./MainContainer.module.css";

const MainContainer = () => {
	return (
		<main className={styles.main}>
      <section className={styles.wrapper}>
        <header className={styles.header}>
          <div className={styles.info}>
            <h3 className={styles.created}>
              Tarefas Criadas
            </h3>
            <span className={styles.counter}>
              0
            </span>
          </div>
          <div className={styles.info}>
            <h3 className={styles.done}>
              Concluídas
            </h3>
            <span className={styles.counter}>
              0
            </span>
          </div>
        </header>
        <Task />
      </section>
		</main>
	);
};

export default MainContainer;