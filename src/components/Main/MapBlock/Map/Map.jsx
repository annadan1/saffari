import styles from "./Map.module.scss";
import pins from "../../../../assets/pins.json";

export const Map = ({ activeButton }) => {
  return (
    <div className={styles.map}>
      <p className={styles.saffariPin}><span className={styles.textBlock}>Knightsbridge private park</span></p>
      {pins.map((pin) => {
        const style = {
          left: pin.left,
          top: pin.top,
        };
        const className = `${styles.pin} ${styles[pin.value]} ${
          pin.group.includes(activeButton) ? styles.activePin : ""
        }`;
        return (
          <p style={style} className={className} key={pin.id}>
            <span className={styles.textBlock}>{pin.name}</span>
          </p>
        );
      })}
    </div>
  );
};
