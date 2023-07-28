import { FrontBlock } from "./FrontBlock/FrontBlock";
import styles from "./Main.module.scss";
import { MapBlock } from "./MapBlock/MapBlock";

export const Main = () => {
  return (
    <main className={styles.container}>
      <FrontBlock/>
      <MapBlock />
    </main>
  );
};
