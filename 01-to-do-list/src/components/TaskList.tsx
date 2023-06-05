import styles from "./TaskList.module.css";
import { Task } from "../@types/Taks";
import { TaskItem } from "./TaskItem";

type TaskListProps = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

export function TaskList({ tasks, setTasks }: TaskListProps) {
  const finishedItems = tasks.filter((item) => item.isFinished === true).length;

  function deleteItem(id: number) {
    const filteredTasks = tasks.filter((item) => item.id !== id);
    setTasks(filteredTasks);
  }

  function changeCheck(id: number) {
    setTasks((prev) =>
      prev.map((item) => {
        if (item.id === id) return { ...item, isFinished: !item.isFinished };
        return item;
      })
    );
  }

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles["tasks-created"]}>
          <h2>Tarefas criadas</h2>
          <span className={styles.badge}>{` ${tasks.length}`}</span>
        </div>
        <div className={styles["tasks-finished"]}>
          <h2>Concluídas</h2>
          <span
            className={styles.badge}
          >{` ${finishedItems} de ${tasks.length}`}</span>
        </div>
      </header>

      <div className={styles.content}>
        {tasks.map((item) => (
          <TaskItem
            key={item.id}
            task={item}
            deleteItem={deleteItem}
            changeCheck={changeCheck}
          />
        ))}
      </div>
    </div>
  );
}
