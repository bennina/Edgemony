import { useState } from "react";
import { HiBarsArrowDown } from "react-icons/hi2";
import { HiBarsArrowUp } from "react-icons/hi2";
import styles from "./index.module.scss";

const BtnFilter = (prop) => {
  const [arrowState, setArrowState] = useState(false);

  const onHandleSorting = () => {
    prop.setFilter((prev) => !prev);
    setArrowState((prev) => !prev);
  };

  return (
    <div className={styles.BtnFilter} onClick={onHandleSorting}>
      <span className={styles.value}>{prop.value}</span>
      {arrowState ? (
        <HiBarsArrowDown className={styles.icon} />
      ) : (
        <HiBarsArrowUp className={styles.icon} />
      )}
    </div>
  );
};
export default BtnFilter;
