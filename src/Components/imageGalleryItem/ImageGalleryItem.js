import s from './ImageGalleryItem.module.css'

const ImageGalleryItem = ({id, largeImageURL, webformatURL, tags, toggleModal}) => {
  console.log(id)
  const openModal = () => toggleModal(largeImageURL);
  return (
    <li className={s.imageGalleryItem} key={id}>
      <img src={webformatURL} alt={tags} className={s.imageGalleryItemImage} onClick={openModal}/>
    </li>
  );
};

export default ImageGalleryItem;
