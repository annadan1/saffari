import styles from "./SecondBlock.module.scss";
import { useState } from "react";
import { MapBlock } from "./MapBlock/MapBlock";
import { ButtonsBlock } from "./ButtonsBlock/ButtonsBlock";

export const SecondBlock = () => {
  const [activeButton, setActiveButton] = useState(null);

  return (
    <div className={styles.container}>
      <div className={styles.buttonsBlock}>
        <h2>на карте</h2>
        <ButtonsBlock
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
      </div>
      <MapBlock activeButton={activeButton} />
    </div>
  );
};
