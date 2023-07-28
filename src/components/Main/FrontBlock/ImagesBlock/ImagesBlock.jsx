import styles from "./ImagesBlock.module.scss";

export const ImagesBlock = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__firstImage}></div>
      <div className={styles.container__buttons}>
        <button
          type="button"
          className={styles.container__buttons__firstButton}
        >
          Презентация ЖК Knightsbridge Private Рark
        </button>
        <button
          type="button"
          className={styles.container__buttons__secondButton}
        >
          Типы планировок апартаментов
        </button>
      </div>
    </div>
  );
};
