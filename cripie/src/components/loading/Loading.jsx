import styles from "./index.module.scss";
const Loading = () => {
  return (
    <div className={styles.loaderCont}>
      <span className={styles.loader}></span>
    </div>
  );
};

export default Loading;
