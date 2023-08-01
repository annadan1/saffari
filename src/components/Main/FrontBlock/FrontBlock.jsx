import styles from "./FrontBlock.module.scss";
import { AboutUs } from "./AboutUs/AboutUs";
import { AboutUsInNumbers } from "./AboutUs/InNumbers/AboutUsInNumbers";
import { ImagesBlock } from "./ImagesBlock/ImagesBlock";
import { useState } from "react";

export const FrontBlock = () => {
  const [showContent, setShowContent] = useState(false);
  const handleClick = () => {
    setShowContent((prev) => !prev);
  };

  return (
    <div
      className={
        showContent
          ? styles.container + " " + styles["big-size"]
          : styles.container
      }
    >
      <div
        className={
          showContent
            ? styles.container__background + " " + styles["big-size"]
            : styles.container__background
        }
      ></div>
      <div className={styles.content}>
        <div className={styles.content__box1}>
          <AboutUsInNumbers showContent={showContent} />
          <AboutUs />
        </div>
        <div>
          <button
            type="button"
            className={styles.content__button}
            onClick={handleClick}
          >
            {showContent ? "Скрыть" : "Узнать подробнее"}
          </button>
        </div>
      </div>
      <ImagesBlock />
    </div>
  );
};
