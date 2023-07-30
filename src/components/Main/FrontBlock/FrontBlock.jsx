import styles from "./FrontBlock.module.scss";
import { AboutUs } from "./AboutUs/AboutUs";
import { AboutUsInNumbers } from "./AboutUs/InNumbers/AboutUsInNumbers";
import { ImagesBlock } from "./ImagesBlock/ImagesBlock";
import { useState } from "react";

export const FrontBlock = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div
      className={
        showContent ? styles.container + " " + styles.show : styles.container
      }
    >
      <div
        className={
          showContent
            ? styles.container__background + " " + styles.show
            : styles.container__background
        }
      ></div>
      <div className={styles.container__content}>
        <AboutUsInNumbers
          showContent={showContent}
          setShowContent={setShowContent}
        />
        <AboutUs />
      </div>
      <ImagesBlock />
    </div>
  );
};
