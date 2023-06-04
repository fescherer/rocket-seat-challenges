import { FormCreateTask } from "./components/FormCreateTask";
import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { GithubProjectLink } from "./components/GithubProjectLink";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <GithubProjectLink />
      <div>
        <FormCreateTask />
      </div>
    </div>
  );
}

export default App;
