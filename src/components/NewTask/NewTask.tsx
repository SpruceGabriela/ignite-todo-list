import { useState } from "react";
import Plus from "../../assets/Plus";
import styles from "./NewTask.module.css";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/taskSlice";

const NewTask = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = () => {
    if (value.trim().length === 0) {
      alert("Error: write a tas=k first!");
      return;
    }

    dispatch(
      addTask({
        task: value,
      })
    );
    setValue("");
  };

  const onEnterPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <section className={styles.container}>
      <input
        className={styles.newTask}
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setValue(event?.target.value)
        }
        onKeyDown={onEnterPress}
      />
      <button
        className={styles.create}
        onClick={onSubmit}
        disabled={value === ""}
      >
        <span>Criar</span>
        <Plus />
      </button>
    </section>
  );
};

export default NewTask;
