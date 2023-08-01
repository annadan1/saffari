import { FrontBlock } from "./FrontBlock/FrontBlock";
import styles from "./Main.module.scss";
import { SecondBlock } from "./SecondBlock/SecondBlock";

export const Main = () => {
  return (
    <main className={styles.main}>
      <FrontBlock/>
      <SecondBlock />
    </main>
  );
};
