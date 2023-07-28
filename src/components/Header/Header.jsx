import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.container}>
      <h1>
        Knightsbridge private park – элитный район Лондона в центре{" "}
        <span className={styles.container__1440hidden}>Москвы</span>
      </h1>
    </header>
  );
};
