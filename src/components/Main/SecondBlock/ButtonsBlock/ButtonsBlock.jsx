import styles from "./ButtonsBlock.module.scss";

export const ButtonsBlock = ({ activeButton, setActiveButton }) => {
  const handleMouseMove = (e) => {
    let target = e.target;
    while (target.tagName === "P") {
      target = target.parentNode;
    }
    setActiveButton(target.value);
  };

  return (
    <div className={styles.buttonsBlock} onMouseMove={handleMouseMove}>
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
  );
};
