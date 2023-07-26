import styles from './AboutUsInNumbers.module.scss'
export const AboutUsInNumbers = () => {
  return (
    <div className={styles.about}>
      <ul>
        <li>
          <span className={styles.title}>156 - 636 м2</span>
          <span className={styles.text}>Площадь квартир</span>
        </li>
        <li>
          <span className={styles.title}>475</span>
          <span className={styles.text}>Парковочных мест</span>
        </li>
        <li>
          <span className={styles.title}>10 мин</span>
          <span className={styles.text}>До метро Фрунзенская</span>
        </li>
        <li>
          <span className={styles.title}>2 га</span>
          <span className={styles.text}>Площадь собственного парка</span>
        </li>
      </ul>
    </div>
  );
};
