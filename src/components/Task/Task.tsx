import Trash from "../../assets/Trash";
import styles from "./Task.module.css";

const Task = () => {
	return (
		<div className={styles.task}>
      <div className={styles.wrapper}>
        <input className={styles.checkbox} type="checkbox" id="task" name="taskName"/>
        <label className={styles.checkboxLabel} htmlFor="task"></label>
        <p className={styles.name}>task name lalalalalalalalallalaal</p>
      </div>
      <button className={styles.delete}>
        <Trash />
      </button>
    </div>
	);
};

export default Task;
