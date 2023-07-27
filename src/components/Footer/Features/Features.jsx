import { Feature } from "./Feature/Feature";
import styles from "./Features.module.scss";

export const Features = ({ features }) => {
  return (
    <div className={styles.slider}>
      {features.map((feature) => {
        return <Feature feature={feature} key={feature.number} />;
      })}
    </div>
  );
};
