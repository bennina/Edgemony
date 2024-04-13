import { useContext, useEffect } from "react";
import { Context } from ".";
const AppWrapper = ({ children }) => {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    fetch(
      process.env.NEXT_PUBLIC_API_URL +
        `markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "SET_CRYPTO_LIST",
          payload: data,
        });
      });
  }, []);
  return <>{children}</>;
};
export default AppWrapper;
