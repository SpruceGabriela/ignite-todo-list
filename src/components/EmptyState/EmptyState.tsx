import Empty from "../../assets/Empty";
import styles from "./EmptyState.module.css";

const EmptyState = () => {
	return (
		<section className={styles.emptyState}>
      <Empty />
      <h3 className={styles.title}>Você ainda não tem tarefas cadastradas</h3>
      <p className={styles.message}>Crie tarefas e organize seus itens a fazer</p>
		</section>
	);
};

export default EmptyState;