import styles from "./AboutUsInNumbers.module.scss";
export const AboutUsInNumbers = ({ showContent, setShowContent }) => {
  return (
    <ul className={styles.about}>
      <li>
        <span className={styles.about__title}>156 - 636 м2</span>
        <span className={styles.about__text}>Площадь квартир</span>
      </li>
      <li>
        <span className={styles.about__title}>499</span>
        <span className={styles.about__text}>Парковочных мест</span>
      </li>
      <li>
        <span className={styles.about__title}>10 мин</span>
        <span className={styles.about__text}>До метро Фрунзенская</span>
      </li>
      <li>
        <span className={styles.about__title}>2 га</span>
        <span className={styles.about__text}>Площадь собственного парка</span>
      </li>
      {showContent && (
        <li>
          <span className={styles.about__title}>180 - 2048 м2</span>
          <span className={styles.about__text}>Площадь объектов</span>
        </li>
      )}
    </ul>
  );
};
