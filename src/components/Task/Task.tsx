import { useDispatch } from "react-redux";
import Trash from "../../assets/Trash";
import styles from "./Task.module.css";
import { deleteTask, toggleCheck } from "../../redux/taskSlice";

interface TaskProps {
  name: string;
  id: number;
  isChecked: boolean;
}

const Task: React.FC<TaskProps> = ({ name, id, isChecked }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(
      deleteTask({
        id: id,
      })
    );
  };

  const handleToggleCheck = () => {
    dispatch(
      toggleCheck({
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
          id={id.toString()}
          name={name}
          onChange={handleToggleCheck}
          checked={isChecked}
        />
        <label className={styles.checkboxLabel} htmlFor={id.toString()}></label>
        <p className={styles.name}>{name}</p>
      </div>
      <button className={styles.delete} onClick={handleDelete}>
        <Trash />
      </button>
    </div>
  );
};

export default Task;
