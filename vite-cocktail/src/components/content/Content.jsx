import Card from "../card";
import styles from "./index.module.scss";

const Content = ({ data, setSingleItemContext }) => {
  return (
    <div className={styles.Content}>
      {data.map((cocktail) => (
        <Card data={cocktail} setSingleItemContext={setSingleItemContext} />
      ))}
    </div>
  );
};

export default Content;
