import styles from "./FrontBlock.module.scss";
import { AboutUs } from "./AboutUs/AboutUs";
import { AboutUsInNumbers } from "./AboutUs/InNumbers/AboutUsInNumbers";
import { ImagesBlock } from "./ImagesBlock/ImagesBlock";

export const FrontBlock = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__background}></div>
      <div className={styles.container__content}>
        <div className={styles.box1}>
          <AboutUsInNumbers />
          <AboutUs />
        </div>
        <div className={styles.box2}>
          <button type="button" className={styles.container__button}>
            Узнать подробнее
          </button>
        </div>
      </div>
      <ImagesBlock />
    </div>
  );
};
