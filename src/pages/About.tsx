import { DefaultLayout } from "@/layouts/DefaultLayout";
import styles from "./About.module.scss";

function About() {
  return (
    <DefaultLayout>
      <div className={styles.root}>About</div>
    </DefaultLayout>
  );
}

export default About;
