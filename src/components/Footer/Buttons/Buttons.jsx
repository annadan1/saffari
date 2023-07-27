import styles from "./Buttons.module.scss";

export const Buttons = ({ handleClick }) => {
  return (
    <div className={styles.buttons}>
      <button
        type="button"
        value="prev"
        className={styles.leftButton}
        onClick={handleClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="17"
          viewBox="0 0 11 17"
          fill="current"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.42294 1.2244C8.75225 0.916704 9.27591 0.92668 9.59256 1.24669C9.90921 1.5667 9.89894 2.07555 9.56962 2.38325L3.02318 8.5L9.56962 14.6167C9.89894 14.9244 9.90921 15.4333 9.59256 15.7533C9.27591 16.0733 8.75225 16.0833 8.42294 15.7756C8.42294 15.7756 1.25665 9.08555 1.23089 9.05952C1.07599 8.90298 0.999327 8.70126 0.999962 8.5C0.999327 8.29874 1.07599 8.09701 1.23089 7.94048C1.25665 7.91445 8.42294 1.2244 8.42294 1.2244Z"
            fill="current"
            stroke="current"
          />
        </svg>
      </button>
      <button
        type="button"
        value="next"
        className={styles.rightButton}
        onClick={handleClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="17"
          viewBox="0 0 11 17"
          fill="current"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.40055 1.2244C2.07123 0.916704 1.54758 0.92668 1.23093 1.24669C0.91428 1.5667 0.924548 2.07555 1.25386 2.38325L7.8003 8.5L1.25386 14.6167C0.924548 14.9244 0.914281 15.4333 1.23093 15.7533C1.54758 16.0733 2.07124 16.0833 2.40055 15.7756C2.40055 15.7756 9.56684 9.08555 9.5926 9.05952C9.74749 8.90298 9.82416 8.70126 9.82352 8.5C9.82416 8.29874 9.74749 8.09701 9.5926 7.94048C9.56684 7.91445 2.40055 1.2244 2.40055 1.2244Z"
            fill="current"
            stroke="current"
          />
        </svg>
      </button>
    </div>
  );
};
