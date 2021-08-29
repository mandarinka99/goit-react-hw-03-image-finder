import ImageGalleryItem from "../imageGalleryItem/ImageGalleryItem";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, toggleModal }) => {
  return (
    <ul className={s.imageGallery}>
      {images.map((image) => (
        <ImageGalleryItem {...image} toggleModal={toggleModal} key={image.id} />
      ))}
    </ul>
  );
};

export default ImageGallery;
