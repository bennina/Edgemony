import { useState } from "react";
import MiniCard from "../miniCard/MiniCard";
import ProductDetail from "../productDetail";
import "./index.css";



const ModalCart = ({ productData, setModalContextCart }) => {
  
  console.log(productData)
  console.log(setModalContextCart)
  const onHandleClose = () =>
    setModalContextCart((prev) => ({
      ...prev,
      isVisibile: false,
    }));


  return (
    <div className="ModalCart">
        {productData.map((card) => (
          <MiniCard imgSrc={card.thumbnail} imgAlt={card.title} key={card.id} />
        ))}
        <button onClick={onHandleClose} className="ModalCart--close">
            X
        </button>
        
    </div>
  );
};

export default ModalCart;
