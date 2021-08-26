import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Container from "./container/Container";
import Modal from "./modal/Modal";

class App extends Component {
  state = {
    showModal: true,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const {showModal} = this.state
    return (
      <>
        <Container>
          {showModal && <Modal onClose={this.toggleModal}></Modal>}
        </Container>
      </>
    );
  }
}

export default App;
