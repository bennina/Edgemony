
import { productsList } from "./mocks/productsList";
import { imageList } from "./mocks/imageList";
import Control from "./components/control";
import Hero from "./components/hero";
import Gallery from "./components/gallery";
import ListProducts from "./components/listProducts/ListProducts";
import "./main.css";

{/* qui sono stati importati i componenti */}
const Main = () => {
  return (
    <div className="Main">
      <Gallery images={imageList}/>
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
