import styles from "./index.module.scss";
import { useState, useEffect, useContext } from "react";
import { Context } from "@/store";
import { BsMoon, BsSun } from "react-icons/bs";

const SwictherTheme = ({ func }) => {
  const { state } = useContext(Context);
  const [theme, setTheme] = useState();
  useEffect(() => {
    if (state?.modeData) {
      setTheme(state?.modeData);
    }
  }, []);
  return (
    <div className={styles.SwictherTheme} onClick={func}>
      <div
        className={`${styles.dark} ${theme ? styles.active : styles.unactive}`}
      >
        <BsMoon className={styles.moon} />
      </div>
      <div
        className={`${styles.light} ${theme ? styles.unactive : styles.active}`}
      >
        <BsSun className={styles.sun} />
      </div>
    </div>
  );
};

export default SwictherTheme;
