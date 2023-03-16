import "./index.css";

const MiniCardCart = ({ imgSrc, imgAlt }) => {
  

  return (
    <div className="MiniCardCartCol">
    <img
      
      className="MiniCardCart"
      src={imgSrc}
      alt={imgAlt}
      />
      <p>
      {imgAlt}
      </p>
    </div>
    
    
  );
};

export default MiniCardCart;
