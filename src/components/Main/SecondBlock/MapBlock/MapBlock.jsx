import styles from "./MapBlock.module.scss";
import pins from "../../../../assets/pins.json";

export const MapBlock = ({ activeButton }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__map}></div>
      <p className={styles.saffariPin} title="Knightsbridge private park"></p>
      {pins.map((pin) => {
        const style = {
          left: pin.left, 
          top: pin.top,
        };
        const className = `${styles.pin} ${styles[pin.value]} ${
          pin.group.includes(activeButton) ? styles.activePin : ""
        }`;
        return (
          <p
            style={style}
            className={className}
            key={pin.id}
            title={pin.name}
          ></p>
        );
      })}
    </div>
  );
};
