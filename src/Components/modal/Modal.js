import { Component } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  state = {};
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
    const body = document.querySelector("body");
    body.style.overflow = "auto";
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { pageURL, alt } = this.props;
    return createPortal(
      <div className={s.overlay} onClick={this.handleBackdropClick}>
        <div className={s.modal}>
          <img src={pageURL} alt={alt} />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
