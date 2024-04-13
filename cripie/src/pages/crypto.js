import Layout from "@/components/layout";
import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";
import { Context } from "@/store";
import { GET } from "@/utils/http";
import ChartEl from "@/components/chartEl";
import styles from "@/styles/pages/crypto.module.scss";
import Button from "@/components/button";
import GlobalModal from "@/components/global_modal";
import Popup from "@/components/popup";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

import { MdStars } from "react-icons/md";

export default function cryptoId() {
  const router = useRouter();
  const { name } = router.query;
  const [singleCryptoData, setSingleCryptoData] = useState([]);
  const [isGlobalModal, setIsGlobalModal] = useState(false);
  const [cryptoInfo, setCryptoInfo] = useState(null);
  const [popUpVisibility, setPopUpVisibility] = useState(false);

  if (typeof window !== "undefined") {
    if (localStorage.getItem("watchlist")) {
      null;
    } else {
      localStorage.setItem("watchlist", "[]");
    }
  }

  const [watchlist, setWatchlist] = useState(
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("watchlist"))
      : []
  );

  const [starStatus, setStarStatus] = useState(
    !!watchlist.find((item) => item === name) ? true : null
  );

  React.useEffect(() => {
    if (router.isReady) {
      GET(`${name}/market_chart?vs_currency=eur&days=7&interval=daily`).then(
        (data) => setSingleCryptoData(data.prices)
      );
      GET(`${name}`).then((data) => setCryptoInfo(() => data));
    }
  }, [router.isReady]);

  useEffect(() => {
    dispatch({ type: "SELECTED_ICON", payload: "allCrypto" });
  }, []);

  const onHandleOpenModal = () => {
    setIsGlobalModal((prev) => !prev);
  };

  const onHandleStar = () => {
    setPopUpVisibility(true);
    setTimeout(() => setPopUpVisibility(false), 2000);
    {
      {
        if (typeof window !== "undefined") {
          if (watchlist) {
            if (!!watchlist.find((item) => item === name)) {
              localStorage.setItem(
                "watchlist",
                JSON.stringify([...watchlist.filter((item) => item !== name)])
              );
              setWatchlist((prev) => [...prev.filter((item) => item !== name)]);
              setStarStatus(() => false);
            } else {
              localStorage.setItem(
                "watchlist",
                JSON.stringify([...watchlist, name])
              );
              setWatchlist((prev) => [...prev, name]);
              setStarStatus(() => true);
            }
          }
        }
      }
    }
  };

  const { state, dispatch } = useContext(Context);
  const handleBackButtonClick = () => {
    window.history.back();
  };

  return (
    <main className={styles.Main}>
      <Layout>
        <div className={styles.popup}>
          {popUpVisibility && starStatus ? (
            <Popup text={`'${name}' added in your watchlist`} />
          ) : (
            popUpVisibility && (
              <Popup text={`'${name}' removed from your watchlist`} />
            )
          )}
        </div>
        <div className={styles.header}>
          <div className={styles.row}>
            <button
              onClick={handleBackButtonClick}
              className={styles.backButton}
            >
              <AiOutlineArrowLeft className={styles.arrow} />
            </button>
            <div className={styles.col}>
              <h2>{cryptoInfo?.market_cap_rank}.</h2>
              <img
                className={styles.image}
                src={cryptoInfo?.image && cryptoInfo.image.large}
                alt={cryptoInfo?.name}
              />
              <h2>{name}</h2>
              <MdStars
                onClick={onHandleStar}
                className={`${styles.star} ${starStatus && styles.starActive}`}
              />
            </div>
            <div className={styles.btn}>
              <Button
                text="buy"
                className={styles.btn}
                func={onHandleOpenModal}
              />
            </div>
          </div>
        </div>
        <div className={styles.chartArea}>
          <ChartEl prices={singleCryptoData} />
        </div>

        {cryptoInfo?.market_data && (
          <>
            <div className={styles.info}>
              <div className={styles.price}>
                <div className={styles.priceDettails}>
                  <h5 className={styles.priceValue}>
                    <span>Price: </span> €
                    {cryptoInfo?.market_data?.current_price?.eur}
                  </h5>
                  <h6
                    className={
                      cryptoInfo?.market_data?.price_change_percentage_24h > 0
                        ? styles.positiveVar
                        : styles.negativeVar
                    }
                  >
                    {cryptoInfo?.market_data?.price_change_percentage_24h.toFixed(
                      2
                    )}
                    %
                  </h6>
                </div>

                <div className={styles.HLprice}>
                  <h6>
                    Lowest:
                    {cryptoInfo?.market_data?.low_24h?.eur}€
                  </h6>
                  <h6>
                    Hightest:
                    {cryptoInfo?.market_data?.high_24h.eur}€
                  </h6>
                </div>
              </div>

              <div className={styles.supply}>
                <h6>
                  Circulating supply:
                  {cryptoInfo?.market_data?.circulating_supply}
                </h6>
                <h6>
                  Total supply:
                  {cryptoInfo?.market_data?.total_supply}
                </h6>
              </div>

              <div className={styles.marketCap}>
                <h6>Market Cap: €{cryptoInfo.market_data?.market_cap?.eur}</h6>
              </div>
            </div>
            <div className={styles.description}>
              <h3>Description:</h3>
              <p
                dangerouslySetInnerHTML={{ __html: cryptoInfo.description?.en }}
              ></p>
            </div>
          </>
        )}

        {isGlobalModal && (
          <GlobalModal
            setIsGlobalModal={setIsGlobalModal}
            icon={cryptoInfo.image.large}
            price={cryptoInfo.market_data.current_price.eur}
            id={cryptoInfo.id}
          />
        )}
      </Layout>
    </main>
  );
}
