import "./index.css";
{/*Io sono il componente del tasto */}
const Button = ({ text, clickFunc, isDisabled = false }) => {
  return (
    <button
      className={`Button  ${isDisabled ? "disabled" : null}`}
      onClick={clickFunc}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

export default Button;
