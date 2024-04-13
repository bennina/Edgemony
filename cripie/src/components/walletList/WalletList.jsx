import styles from "./index.module.scss";
import WalletCard from "../walletCard";
import { useEffect, useState } from "react";

const WalletList = ({ inHomeActive }) => {
  const [walletInLocalStorage, setWalletInLocalStorage] = useState();
  const [refresh, setRefresh] = useState(false);

  const WalletCoins = () => {
    const storedCoins = typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("wallet"))
      : [];
    setWalletInLocalStorage(storedCoins);
  };

  useEffect(() => {
    WalletCoins();
  }, [refresh]);

  const onSell = () => {
    setRefresh(!refresh);
  };

  return (
    <div
      className={`${styles.WalletList} ${
        inHomeActive && styles.walletListHome
      }`}
    >
      {walletInLocalStorage?.map((item) => (
        <WalletCard props={item} key={item.id} onSell={onSell} />
      ))}
    </div>
  );
};

export default WalletList;