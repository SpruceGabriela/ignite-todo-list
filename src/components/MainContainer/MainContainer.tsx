import { useSelector } from "react-redux";
import Task from "../Task";
import styles from "./MainContainer.module.css";
import { RootState } from "../../redux/store";

const MainContainer = () => {
  const todos = useSelector((state: RootState) => state.items);
  const counter = todos.filter((task) => task.isChecked === true).length;

  return (
    <main className={styles.main}>
      <section className={styles.wrapper}>
        <header className={styles.header}>
          <div className={styles.info}>
            <h3 className={styles.created}>Tarefas Criadas</h3>
            <span className={styles.counter}>{todos.length}</span>
          </div>
          <div className={styles.info}>
            <h3 className={styles.done}>Concluídas</h3>
            <span className={styles.counter}>{counter}</span>
          </div>
        </header>
        {todos.length > 0
          ? todos.map(({ id, value, isChecked }) => (
              <Task key={id} name={value} id={id} isChecked={isChecked} />
            ))
          : null}
      </section>
    </main>
  );
};

export default MainContainer;
