import { PlusCircle } from "@phosphor-icons/react";
import styles from "./FormCreateTask.module.css";

export function FormCreateTask() {
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        className={styles.input}
      />
      <button className={styles.button}>
        <span>Criar</span>
        <PlusCircle />
      </button>
    </div>
  );
}
