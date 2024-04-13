import styles from "./index.module.scss";

import { useRouter } from "next/router";

const Card = (props) => {
  const data = props;
  const coins = data.props;

  const router = useRouter();

  const onHandleOpenDetails = () => {
    router.push({
      pathname: "crypto",
      query: { name: coins.id },
    });
  };

  return (
    <div className={styles.Card} onClick={onHandleOpenDetails}>
      <div className={styles.details}>
        <div className={styles.actions}>
          <img className={styles.image} src={coins.image} alt={coins.id} />
          <p className={styles.rank}>{coins.market_cap_rank}</p>
          <div className={styles.icons}>
            <h1 className={styles.symbol}>{coins.symbol.toUpperCase()}</h1>
            <p className={styles.rank}>{coins.id}</p>
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.day}>
          <span>PRICE</span>
          <span className={styles.digits}>€{coins.current_price}</span>
        </div>
        <div className={styles.week}>
          <span>CHANGE PERC.</span>
          <span
            className={
              coins.price_change_percentage_24h > 0
                ? styles.positiveVar
                : styles.negativeVar
            }
          >
            {coins.price_change_percentage_24h.toFixed(2)}%
          </span>
        </div>
        <div className={styles.month}>
          <span>MARKET-CAP</span>
          <span className={styles.digits}>€{coins.market_cap}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
