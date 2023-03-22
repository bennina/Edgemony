import styles from "./index.module.scss";

const Hero = ({ setCategory }) => {
  const onHandleClick = (value) => {
    setCategory(value);
  };

  return (
    <div className={styles.Hero}>
      <section>
        <h1>Cocktail</h1>
      </section>
      
      <ul className={styles.Hero__first__list}>
        <li>Alcolico</li>
        <li>Analcolico</li>
        <li>Vini</li>
        <li>Dessert</li>
      </ul>
      
      <ul className={styles.Hero__second__list}>
        <li onClick={() => onHandleClick("Ordinary Drink")}>Ordinary Drink</li>
        <li onClick={() => onHandleClick("Cocktail")}>Cocktail</li>
        <li onClick={() => onHandleClick("Shot")}>Shot</li>
        <li onClick={() => onHandleClick("Punch / Party Drink")}>Punch</li>
        <li onClick={() => onHandleClick("Coffee / Tea")}>Coffee</li>
        <li onClick={() => onHandleClick("Other / Unknown")}>Other</li>
      </ul>
    </div>
  );
};

export default Hero;
