import React from "react";
import "./Modal.css";

function Modal({ closeModal, userName }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modalClose">
          <button onClick={closeModal}>X</button>
        </div>
        <div className="title">
          <h1>From Lily & Fox</h1>
        </div>
        <div className="body">
          <p>Thank you, {userName}, for getting in contact with us!</p>
        </div>
        <div className="footer">
          <button className="close-btn" onClick={closeModal}>
            Cancel
          </button>
          <button className="continue-btn">Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
