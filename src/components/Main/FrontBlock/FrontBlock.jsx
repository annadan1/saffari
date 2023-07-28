import styles from "./FrontBlock.module.scss";
import { AboutUs } from "./AboutUs/AboutUs";
import { AboutUsInNumbers } from "./AboutUs/InNumbers/AboutUsInNumbers";
import { ImagesBlock } from "./ImagesBlock/ImagesBlock";

export const FrontBlock = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__background}></div>
      <div className={styles.container__content}>
        <AboutUsInNumbers />
        <AboutUs />
      </div>
      <ImagesBlock />
    </div>
  );
};
