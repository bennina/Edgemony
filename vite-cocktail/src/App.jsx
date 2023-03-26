import { useState, useEffect } from "react";
import { GET } from "./utils/http";
import { filteredList } from "./utils/funcs";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Content from "./components/content";
import Reservation from "./components/reservation/Reservation";
import SingleItem from "./components/singleItem/SingleItem";
import styles from "./App.module.scss";
import Footer from "./components/footer";

function App() {
  const [reservationIsVisibile, setReservationVisibility] = useState(false);
  const [cocktailList, setCocktailList] = useState([]);
  const [category, setCategory] = useState("Cocktail");
  const [singleItemContext, setSingleItemContext] = useState({
    isVisible: false,
    payload: {},
  });
  
  const [setMenuOpens, setMenuOpen] = useState({
    isVisible: false,
  });

  useEffect(() => {
    GET("/search.php?f=d").then(({ drinks }) => {
      setCocktailList(() => drinks);
    });
  }, []);

  return (
    <div className={styles.App}>
      
      <Navbar setReservationVisibility={setReservationVisibility} setMenuOpens={setMenuOpens} setMenuOpen={setMenuOpen} />
      
      {singleItemContext.isVisible ? (
        <SingleItem
          data={singleItemContext.payload}
          setSingleItemContext={setSingleItemContext}
        />
      ) : (
          <>
            {reservationIsVisibile && (
            <Reservation setReservationVisibility={setReservationVisibility} />
          )}
          <Hero setCategory={setCategory} />
          <Content
            data={filteredList(cocktailList, "strCategory", category)}
            setSingleItemContext={setSingleItemContext}
          />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
