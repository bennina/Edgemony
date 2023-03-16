import { useState } from "react";
import "./index.css";

const Navbar = ({ cartListLength, setSearchInputValue, setModalContextCart }) => {
  const [inputValue, setInputValue] = useState("");

  const onHandleInput = (e) => setInputValue(() => e.target.value);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setSearchInputValue(() => inputValue);
    // TODO: trasmettere il valore della input (inputValue) all'elemento di ricerca
  };


  const openMinicart = () => {
    setModalContextCart((prev) => ({
      ...prev,
      isVisibile: true,
    }));
    
  };

  return (
    <div className="Navbar">
      <ul>
        <li>Home</li>
        <li>Contacts</li>
        <li>About us</li>
      </ul>
      <form onSubmit={onHandleSubmit}>
        <input
          value={inputValue}
          onChange={onHandleInput}
          type="text"
          placeholder="Cerca prodotto ..."
          required
        />
      </form>
      <div className="Navbar__cart" onClick={openMinicart}>
        <p> <div className="count">{cartListLength}</div> 🛒</p>
      </div>
    </div>
  );
};

export default Navbar;
