import styles from "./index.module.scss";

const WalletCard = (props) => {
  const { props: coins, onSell } = props;

  let newLocalStorage = [];
  const onHandleSell = () => {
    const Storage = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("wallet")) : [];
    newLocalStorage = Storage.filter((crypto) => crypto.id !== coins.id);
    newLocalStorage.length > 0
      ? localStorage.setItem("wallet", JSON.stringify(newLocalStorage))
      : localStorage.removeItem("wallet");
    onSell();
  };

  return (
    <div className={styles.WalletCard}>
      <span className={styles.inWallet}>In the wallet</span>
      <div className={styles.info}>
        <div className={styles.coin}>
          <img className={styles.image} src={coins.icon} alt={coins.id} />
          <h2 className={styles.id}>
            {coins.id ? coins.id.toUpperCase() : null}
          </h2>
        </div>
        <div className={styles.qty}>
          <span>OWNED:</span> <span>{coins.qty}</span>
        </div>
        <button onClick={onHandleSell} className={styles.sell}>
          SELL
        </button>
      </div>
    </div>
  );
};

export default WalletCard;