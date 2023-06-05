import { FormCreateTask } from "./components/FormCreateTask";
import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { GithubProjectLink } from "./components/GithubProjectLink";
import { TaskList } from "./components/TaskList";
import { useState } from "react";
import { Task } from "./@types/Taks";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <div className={styles.container}>
      <Header />
      <GithubProjectLink />
      <div className={styles.content}>
        <FormCreateTask setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}

export default App;
