import { useState, useEffect, useContext } from "react";
import { Context } from "@/store";

import styles from "./index.module.scss";

import Navbar from "../navbar";
import Header from "../header";

const Layout = ({ children }) => {
  const { state } = useContext(Context);
  const [theme, setTheme] = useState();

  useEffect(() => {
    setTheme(state.modeData);
  }, [state]);

  return (
    <div className={styles.Layout}>
      <div className={theme ? styles.dark : styles.unactive}>
        <Header />
        <Navbar />
        <div className={styles.container}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
