import "./index.css";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero__text">
        <h1>Vite Commerce</h1>
        <h3>Il miglior marketplace in Vite</h3>
      </div>
      <img
        src="https://images.unsplash.com/photo-1521829233439-1b21bf81523e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80"
        alt="hero image"
      />
    </div>
  );
};

export default Hero;
