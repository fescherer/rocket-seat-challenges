import { Check, Trash } from "@phosphor-icons/react";
import { Task } from "../@types/Taks";
import styles from "./TaskItem.module.css";
import * as Checkbox from "@radix-ui/react-checkbox";

type TaskItemProps = {
  task: Task;
  deleteItem: (task: number) => void;
  changeCheck: (id: number) => void;
};

export function TaskItem({ task, deleteItem, changeCheck }: TaskItemProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Checkbox.Root
          className={styles["checkbox-root"]}
          checked={task.isFinished}
          onCheckedChange={() => changeCheck(task.id)}
        >
          <Checkbox.Indicator className={styles["checkbox-indicator"]}>
            <Check weight="bold" />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <div className={task.isFinished ? styles.finished : ""}>
          {task.content}
        </div>
      </div>
      <button className={styles.delete} onClick={() => deleteItem(task.id)}>
        <Trash size={18} />
      </button>
    </div>
  );
}
