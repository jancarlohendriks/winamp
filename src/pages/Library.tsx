import { DefaultLayout } from "@/layouts/DefaultLayout";
import styles from "./Library.module.scss";

function Library() {
  return (
    <DefaultLayout>
      <div className={styles.root}>Library</div>
    </DefaultLayout>
  );
}

export default Library;
