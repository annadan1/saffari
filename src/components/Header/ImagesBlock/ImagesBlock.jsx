import styles from "./ImagesBlock.module.scss";

export const ImagesBlock = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstImage}></div>
      <div className={styles.buttons}>
        <button className={styles.firstButton}>
          Презентация ЖК Knightsbridge Private Рark
        </button>
        <button className={styles.secondButton}>
          Типы планировок апартаментов
        </button>
      </div>
    </div>
  );
};
