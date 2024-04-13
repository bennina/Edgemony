import styles from "./index.module.scss";

const Popup = (prop) => {
  return <div className={styles.Popup}>{prop.text}</div>;
};
export default Popup;
