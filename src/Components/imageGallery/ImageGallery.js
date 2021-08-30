import ImageGalleryItem from "../imageGalleryItem/ImageGalleryItem";
import s from "./ImageGallery.module.css";
import PropTypes from 'prop-types';

const ImageGallery = ({ images, toggleModal }) => {
  return (
    <ul className={s.imageGallery}>
      {images.map((image) => (
        <ImageGalleryItem {...image} toggleModal={toggleModal} key={image.id} />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array,
  toggleModal: PropTypes.func
}

export default ImageGallery;
