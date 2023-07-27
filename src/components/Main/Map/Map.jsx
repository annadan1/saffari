import styles from "./Map.module.scss";
import pins from "../../../data/data.json";

export const Map = ({ activeButton }) => {
  return (
    <div className={styles.map}>
      <p className={styles.saffariPin}></p>
      {pins.map((pin) => {
        const style = {
          left: pin.left,
          top: pin.top,
        };
        const className = `${styles.pin} ${styles[pin.value]} ${
          pin.group.includes(activeButton) ? styles.activePin : ""
        }`;
        return (
          <p style={style} className={className}>
            <p className={styles.textBlock}>{pin.name}</p>
          </p>
        );
      })}
    </div>
  );
};
