import { Component } from 'react';
import s from './ImageGalleryItem.module.css';
import img from "./images/loading-img.jpg";
import classNames from 'classnames';

class ImageGalleryItem extends Component {
  state = { loaded: false };
  openModal = () => this.props.toggleModal(this.props.largeImageURL);

  handleImageLoaded = () => {
    if (!this.state.loaded) {
        this.setState({ loaded: true });
    }
} 
  render() {
    const {webformatURL, tags} = this.props;
    const classes = classNames({
      [s.imageGalleryItemImageLoading]: true, 
      [s.active]: !this.state.loaded, 
   });
    return (
      <li className={s.imageGalleryItem}>
      <img src={img} alt="loading" className={classes}/>
      
      <img src={webformatURL} onLoad={this.handleImageLoaded} alt={tags} className={s.imageGalleryItemImage} onClick={this.openModal}/>
    </li>
    );
  }
}

export default ImageGalleryItem;

