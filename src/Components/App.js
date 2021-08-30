import React, { Component } from "react";
import Modal from "./modal/Modal";
import SearchBar from "./searchBar/SearchBar";
import ImageGallery from "./imageGallery/ImageGallery";
import Button from "./button/Button";
import Spiner from "./spiner/Spiner";
import Container from "./container/Container";
import API from "../action/API"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



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
    if (
      this.state.search !== prevState.search ||
      this.state.page !== prevState.page
    ) {
      this.setState({
        isLoading: true,
      });

      const data = await API.requestImages(this.state.search, this.state.page);

      if (this.state.search !== prevState.search) {
        this.setState({
          page: 1,
        });
      }

      if (data.hits.length === 0) {
        toast.warn("No results for your query");
        return;
      }

      if (this.state.page === 1) {
        this.setState({ images: data.hits, isLoading: false });
      } else {
        this.setState((prev) => ({
          images: [...prev.images, ...data.hits],
          isLoading: false,
        }));
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      }
    }
  }

  loadMore = () => {
    this.setState(({ page }) => ({page: page + 1}));
  };

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
    const { handleSubmit, toggleModal, loadMore } = this;
    const { showModal, images, imageUrl, search, isLoading } = this.state;
    return (
      <>
        <SearchBar handleSubmit={handleSubmit} />
        <Container>
          <ImageGallery images={images} toggleModal={toggleModal} />
          {showModal && (
            <Modal
              onClose={toggleModal}
              pageURL={imageUrl}
              alt={search}
            ></Modal>
          )}
          {isLoading && <Spiner />}
          {images.length > 0 && <Button loadMore={loadMore} />}
          <ToastContainer autoClose={3000} />
        </Container>
      </>
    );
  }
}

export default App;
