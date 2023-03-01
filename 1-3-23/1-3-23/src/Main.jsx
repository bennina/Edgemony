
import { productsList } from "./mocks/productsList";
import Control from "./components/control";
import Hero from "./components/hero";
import ListProducts from "./components/listProducts/ListProducts";
import "./main.css";
{/* qui sono stati importati i componenti */}
const Main = () => {
  return (
    <div className="Main">
      {/* Questo è il componente della hero */}
      <Hero title="Negozio" />
      {/* Questo è il componente che fai il conteggio dei prodotti */}
      <Control listDataLength={productsList.length} />
      {/* Loop prodotti */}
      <ListProducts listData={productsList} />
    </div>
  );
};
{/* Export componente */}
export default Main;
