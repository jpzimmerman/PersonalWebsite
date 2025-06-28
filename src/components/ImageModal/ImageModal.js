import { useState } from "react";
import "./modal.css";

const ImageModal = ({ isOpen, handleClose, children }) => {
  const showHideClassName = isOpen
    ? "modal display-block"
    : "modal display-none";

  return (
    <section className={showHideClassName}>
      <section className="modal-main">{children}</section>
      <button onClick={handleClose}>Close</button>
    </section>
  );
};

export default ImageModal;
