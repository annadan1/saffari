import { useState } from "react";
import styles from "./Mark.module.scss";

export const Mark = ({ pin, activeButton }) => {
  const [showText, setShowText] = useState(false);

  const className = `${styles.pin} ${styles[pin.logo]} ${
    pin.group.includes(activeButton) ? styles.active-pin : ""
  }`;
  return (
    <div
      className={className}
      onMouseEnter={() => {
        setShowText(true);
      }}
      onMouseLeave={() => {
        setShowText(false);
      }}
    >
      {showText && <p className={styles.title}>{pin.title}</p>}
    </div>
  );
};
