import { PlusCircle } from "@phosphor-icons/react";
import styles from "./FormCreateTask.module.css";
import { Task } from "../@types/Taks";
import { FormEvent, useState } from "react";

type FormCreateTaskProps = {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

export function FormCreateTask({ setTasks }: FormCreateTaskProps) {
  const [taskName, setTaskName] = useState<string>("");

  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!taskName) return;
    setTasks((prev) => [
      ...prev,
      { id: prev.length + 1, content: taskName, isFinished: false },
    ]);
  }

  return (
    <form
      className={styles.container}
      onSubmit={(event) => handleFormSubmit(event)}
    >
      <input
        value={taskName}
        type="text"
        placeholder="Adicione uma nova tarefa"
        className={styles.input}
        onChange={(event) => setTaskName(event.target.value)}
      />
      <button className={styles.button} type="submit">
        <span>Criar</span>
        <PlusCircle size={22} />
      </button>
    </form>
  );
}
