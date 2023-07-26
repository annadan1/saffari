import { AboutUs } from "./AboutUs/AboutUs";
import { AboutUsInNumbers } from "./AboutUs/InNumbers/AboutUsInNumbers";
import styles from "./Header.module.scss";
import { ImagesBlock } from "./ImagesBlock/ImagesBlock";

export const Header = () => {
  return (
    <header className={styles.container}>
      <h1>Knightsbridge private park – элитный район Лондона в центре</h1>
      <div className={styles.background}>
        <div className={styles.content}>
          <AboutUsInNumbers />
          <AboutUs />
        </div>
      </div>
      <ImagesBlock />
    </header>
  );
};
