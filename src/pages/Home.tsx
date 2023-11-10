import { DefaultLayout } from "@/layouts/DefaultLayout";
import styles from "./Home.module.scss";
import AudioPlayer from "@/components/AudioPlayer";

function Home() {
  return (
    <DefaultLayout>
      <div className={styles.root}>
        <AudioPlayer />
      </div>
    </DefaultLayout>
  );
}

export default Home;
