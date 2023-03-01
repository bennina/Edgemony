import "./index.css";

const Gallery = ({ images }) => {
  return (
    <div className="Gallery">
      {images.map((image) => (
        <img width="100%" height="auto" src={image.image} alt="Apple" />
      ))}  
    </div>
  );
};

export default Gallery;
