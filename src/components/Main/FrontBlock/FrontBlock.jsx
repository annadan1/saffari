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
          ? styles.container + " " + styles.container__show
          : styles.container
      }
    >
      <div
        className={
          showContent
            ? styles.container__background + " " + styles.container__show
            : styles.container__background
        }
      ></div>
      <div className={styles.container__content}>
        <div className={styles.box1}>
          <AboutUsInNumbers showContent={showContent} />
          <AboutUs />
        </div>
        <div className={styles.box2}>
          <button
            type="button"
            className={styles.container__button}
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
