import styles from "./index.module.scss";

const Button = ({ text, func }) => {
  return (
    <div className={styles.Button} onClick={func}>
      <h3> {text} </h3>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16.588"
        height="10.373"
        viewBox="0 0 16.588 10.373"
      >
        <path
          id="arrow-left-long"
          d="M.3,4.454a1.038,1.038,0,0,0,0,1.468l4.147,4.147A1.038,1.038,0,0,0,5.919,8.6L3.541,6.223H15.551a1.037,1.037,0,1,0,0-2.074H3.541L5.919,1.771A1.038,1.038,0,0,0,4.451.3L.3,4.451Z"
          transform="translate(16.588 10.373) rotate(180)"
        />
      </svg>
    </div>
  );
};

export default Button;
