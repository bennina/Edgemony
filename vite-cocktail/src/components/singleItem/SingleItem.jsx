import styles from "./index.module.scss";

const SingleItem = ({ data, setSingleItemContext }) => {
  const onHandleClick = () =>
    setSingleItemContext((prev) => ({
      ...prev,
      isVisible: false,
    }));

  return (
    <div className={styles.SingleItem}>
      
      <div className={styles.contentModal}>
      
        <div className={styles.SingleItem__text}>
          <div className={styles.title__row}> 
            <button onClick={onHandleClick}>X</button>
          </div>
        
          <h1>{data.strDrink}</h1>
          <p>{data.strCategory}</p>
          <p>Container: {data.strGlass}</p>
          <div className={styles.SingleItem__text__lists}>
            <ul>
              <h3>Ingredients</h3>
              <li>{data.strIngredient1}</li>
              <li>{data.strIngredient2}</li>
              <li>{data.strIngredient3}</li>
            </ul>
            
              <h3>Instructions</h3>
              <p>{data.strInstructions}</p>
            
          </div>
          
        </div>
        <div className={styles.SingleItem__image}>
          <img src={data.strDrinkThumb} alt={data.idDrink} />
          <div className={styles.SingleItem__image__carousel}>
            <button>Previous</button>
            <button>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
