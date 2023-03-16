import { useState } from "react";
import MiniCardCart from "../miniCardCart/MiniCardCart";

import "./index.css";

const ModalCart = ({ productData, setModalContextCart }) => {
  console.log(productData);
  console.log(setModalContextCart);
  const onHandleClose = () =>
    setModalContextCart((prev) => ({
      ...prev,
      isVisibile: false,
    }));

  return (
    <div className="ModalCart">
      <div className="ModalCart__content">
        <div className="ModalCart__product">
          {productData.map((card) => (
            <MiniCardCart
              imgSrc={card.thumbnail}
              imgAlt={card.title}
              key={card.id}
            />
          ))}
        </div>
        <button onClick={onHandleClose} className="ModalCart--close">
            X
          </button>
      </div>
    </div>
  );
};

export default ModalCart;
