import { AboutUs } from "./AboutUs/AboutUs";
import { AboutUsInNumbers } from "./AboutUs/InNumbers/AboutUsInNumbers";
import styles from "./Header.module.scss";
import { ImagesBlock } from "./ImagesBlock/ImagesBlock";

export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.container__background}></div>
      <div className={styles.container__content}>
        <h1>
          Knightsbridge private park – элитный район Лондона в центре{" "}
          <span className={styles.container__1440hidden}>Москвы</span>
        </h1>
        <div className={styles.container__content__about}>
          <AboutUsInNumbers />
          <AboutUs />
        </div>
      </div>
      <ImagesBlock />
    </header>
  );
};
