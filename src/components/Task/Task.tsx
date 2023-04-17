import { useDispatch } from "react-redux";
import Trash from "../../assets/Trash";
import styles from "./Task.module.css";
import { deleteTask } from "../../redux/taskSlice";

interface TaskProps {
  name: string;
  id: number;
}

const Task: React.FC<TaskProps> = ({ name, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(
      deleteTask({
        id: id,
      })
    );
  };

  return (
    <div className={styles.task}>
      <div className={styles.wrapper}>
        <input
          className={styles.checkbox}
          type="checkbox"
          id="task"
          name="taskName"
        />
        <label className={styles.checkboxLabel} htmlFor="task"></label>
        <p className={styles.name}>{name}</p>
      </div>
      <button className={styles.delete} onClick={handleDelete}>
        <Trash />
      </button>
    </div>
  );
};

export default Task;
