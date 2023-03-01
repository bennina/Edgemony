import CardProduct from "../cardProduct";
import "./index.css";

const ListProducts = ({ listData, title }) => {
  return (
    <div className="ListProducts">
      <h2> {title} </h2>
      <div className="row">
        {listData.map((product) => (
          <CardProduct productData={product} key={product.id} />
        ))}
      </div>
      
    </div>
  );
};

export default ListProducts;
