import styles from "./SecondBlock.module.scss";
import { useState } from "react";
import { MapBlock } from "./MapBlock/MapBlock";

export const SecondBlock = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleMouse = (e) => {
    setActiveButton(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonsBlock} onMouseMove={handleMouse}>
        <h2>на карте</h2>
        <div className={styles.buttonsBlock__buttons}>
          <button
            type="button"
            className={activeButton === "1" ? styles.activeButton : null}
            value="1"
          >
            КРАСОТА И ЗДОРОВЬЕ
            <p>3</p>
          </button>
          <button
            type="button"
            className={activeButton === "2" ? styles.activeButton : null}
            value="2"
          >
            МАГАЗИНЫ
            <p>5</p>
          </button>
          <button
            type="button"
            className={activeButton === "3" ? styles.activeButton : null}
            value="3"
          >
            ОБУЧЕНИЕ
            <p>5</p>
          </button>
          <button
            type="button"
            className={activeButton === "4" ? styles.activeButton : null}
            value="4"
          >
            ДЕТСАД
            <p>3</p>
          </button>
          <button
            type="button"
            className={activeButton === "5" ? styles.activeButton : null}
            value="5"
          >
            ОТДЫХ, РАЗВЛЕЧЕНИЯ
            <p>4</p>
          </button>
        </div>
      </div>
      <MapBlock activeButton={activeButton} />
    </div>
  );
};
