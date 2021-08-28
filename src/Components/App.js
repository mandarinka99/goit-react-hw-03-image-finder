import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import Modal from "./modal/Modal";
import SearchBar from "./searchBar/SearchBar";
import ImageGallery from "./imageGallery/ImageGallery";
import Button from "./button/Button";
import Spiner from "./spiner/Spiner";
import Container from "./container/Container";

class App extends Component {
  state = {
    images: [],
    search: "",
    showModal: false,
    page: 1,
    imageUrl: "",
    isLoading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.search !== prevState.search || this.state.page !== prevState.page) {
      this.setState({isLoading: true})
      const res = await fetch(
        `https://pixabay.com/api/?q=${this.state.search}&page=${this.state.page}&key=22769263-58fdf689ff7727797c0ddae89&image_type=photo&orientation=horizontal&per_page=12`
      );
      const data = await res.json();

      if (this.state.page === 1) {
        this.setState({ images: data.hits, isLoading: false});
      } else {
        this.setState((prev) => ({
          images: [...prev.images, ...data.hits],
          isLoading: false
        }))
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      }
    }
  }

  loadMore = () => {
    const nextPage = this.state.page + 1
    this.setState({page: nextPage});
  }

  handleSubmit = (query) => {
    this.setState({
      search: query,
    });
  };

  toggleModal = (pageURL) => {
    this.setState({
      showModal: !this.state.showModal,
      imageUrl: pageURL,
    });
  };

  render() {
    console.log("pep" + this.state.search);
    console.log(this.state.images);
    const { handleSubmit, toggleModal, loadMore } = this;
    const { showModal, images, imageUrl, search, isLoading} = this.state;
    return (
      <>
        <SearchBar handleSubmit={handleSubmit} />
        <Container>
          <ImageGallery images={images} toggleModal={toggleModal} />
          {showModal && (
          <Modal onClose={toggleModal} pageURL={imageUrl} alt={search}></Modal>
          )}
          {isLoading &&  <Spiner/>}
          {(images.length > 0) && <Button loadMore={loadMore}/>}
          <ToastContainer autoClose={3000} />
        </Container>
      </>
    );
  }
}

export default App;
