import styles from "./Main.module.scss";
import { useState } from "react";
import { Map } from "./Map/Map";

export const Main = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleMouse = (e) => {
    setActiveButton(e.target.value);
  };

  return (
    <main className={styles.container}>
      <div className={styles.buttonsBlock} onMouseMove={handleMouse}>
        <h2>на карте</h2>
        <div className={styles.buttons}>
          <button
            type="button"
            className={activeButton === "1" ? styles.activeButton : null}
            value="1"
          >
            КРАСОТА И ЗДОРОВЬЕ
            <p>7</p>
          </button>
          <button
            type="button"
            className={activeButton === "2" ? styles.activeButton : null}
            value="2"
          >
            МАГАЗИНЫ
            <p>7</p>
          </button>
          <button
            type="button"
            className={activeButton === "3" ? styles.activeButton : null}
            value="3"
          >
            ОБУЧЕНИЕ
            <p>7</p>
          </button>
          <button
            type="button"
            className={activeButton === "4" ? styles.activeButton : null}
            value="4"
          >
            ДЕТСАД
            <p>7</p>
          </button>
          <button
            type="button"
            className={activeButton === "5" ? styles.activeButton : null}
            value="5"
          >
            ОТДЫХ, РАЗВЛЕЧЕНИЯ
            <p>7</p>
          </button>
        </div>
      </div>
      <Map activeButton={activeButton} />
    </main>
  );
};
