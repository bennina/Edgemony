import "./index.scss";

const Card = ({ data, setSingleItemContext }) => {
  const onHandleClick = () =>
    setSingleItemContext((prev) => ({
      ...prev,
      payload: data,
      isVisible: true,
    }));

  return (
    <div className="Card" onClick={onHandleClick}>
      <img src={data.strDrinkThumb} alt={data.strDrink} />
      <div className="Card__text">
        <h2>{data.strDrink}</h2>
        <div>
          <span>{data.strIngredient1}</span>
          <span>{data.strIngredient2}</span>
          <span>{data.strIngredient3}</span>
          <span>{data.strIngredient4}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
