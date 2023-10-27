import { useState } from "react";
import reactLogo from "@/assets/react.svg";
import viteLogo from "/vite.svg";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import styles from "./Home.module.scss";
import Logo from "@/components/Logo";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <DefaultLayout>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <Logo src={viteLogo} alt={"Vite logo"} />
        </a>
        <a href="https://react.dev" target="_blank">
          <Logo src={reactLogo} alt={"React logo"} />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={styles.card}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={styles["read-the-docs"]}>
        Click on the Vite and React logos to learn more
      </p>
    </DefaultLayout>
  );
}

export default Home;
