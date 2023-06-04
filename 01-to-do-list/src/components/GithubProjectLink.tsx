import { GithubLogo } from "@phosphor-icons/react";
import styles from "./GithubProjectLink.module.css";

export function GithubProjectLink() {
  return (
    <a href="https://github.com/ofelipescherer" className={styles.button}>
      <GithubLogo weight="fill" size={30} />
    </a>
  );
}
