import Plus from "../../assets/Plus";
import styles from "./NewTask.module.css";

const NewTask = () => {
	return (
		<section className={styles.container}>
			<input className={styles.newTask} type="text" placeholder="Adicione uma nova tarefa" />
				<button className={styles.create}>
					<span>Criar</span>
					<Plus />
				</button>
		</section>
	);
};

export default NewTask;