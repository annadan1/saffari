import styles from "./Footer.module.scss";
import { Buttons } from "./Buttons/Buttons";
import { Features } from "./Features/Features";
import features from "../../assets/feateres.json";
import { useState } from "react";

export const Footer = () => {
  const [currentFeatures, setCurrentFeatures] = useState(features);

  const handleClick = (e) => {
    let target = e.target;
    while (target.tagName !== "BUTTON") {
      target = target.parentNode;
    }
    let newFeatures = [...currentFeatures];
    if (target.value === "next") {
      setCurrentFeatures([...newFeatures.slice(1), newFeatures[0]]);
    } else if (target.value === "prev") {
      setCurrentFeatures([
        newFeatures[newFeatures.length - 1],
        ...newFeatures.slice(0, -1),
      ]);
    }
  };
  return (
    <footer>
      <div className={styles.header}>
        <div>
          <h3>особенности работы</h3>
          <h4>компании Saffari Estate</h4>
        </div>
        <Buttons handleClick={handleClick} />
      </div>
      <Features features={currentFeatures} />
    </footer>
  );
};
