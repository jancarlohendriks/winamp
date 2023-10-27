import styles from "./DefaultLayout.module.scss";

interface Props {
  children?: React.ReactNode;
}

export const DefaultLayout = ({ children }: Props) => {
  return (
    <div className={styles.root}>
      <main>{children}</main>
    </div>
  );
};
