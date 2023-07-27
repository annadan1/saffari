import styles from "./Feature.module.scss";

export const Feature = ({ feature }) => {
  const { number, title, text, buttonText } = feature;
  const style = {
    minWidth: feature.width,
  };
  const styleContent = {
    minWidth: feature.width,
  };
  return (
    <div className={styles.container} style={style}>
      <div className={styles.number}>{number}</div>
      <div className={styles.content} style={styleContent}>
        <p className={styles.title}>{title}</p>
        <p className={styles.text}>{text}</p>
        <button type="button" className={styles.button}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};
