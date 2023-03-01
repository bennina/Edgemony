import "./index.css";

const Masonry = ({ images, title }) => {
  return (
    <div className="Masonry">
      
      {images.map((image) => (
        <figure className="masonry-brick masonry-brick--h">
          <img className="masonry-img" src={image.image} alt={title} />

        </figure>
        
        ))}
      
        
    </div>
  );
};

export default Masonry;
