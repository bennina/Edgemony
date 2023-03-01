import "./index.css";

const Gallery = ({ images, title }) => {
  return (
    <div className="Gallery">
      <h2> {title} </h2>
      <div className="row">
        {images.map((image) => (
          <img src={image.image} alt={title} />
        ))}
      </div>
        
    </div>
  );
};

export default Gallery;
