import React, { useState } from "react";
import "./contactForm.css";
import Modal from "./Modal";

const Form = () => {
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenModal(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Contact us</h1>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="email" name="email" placeholder="Email" />
        <textarea name="message" placeholder="Message" cols="30" rows="6" />
        <div className="checkboxContainer">
          <input
            className="check"
            type="checkbox"
            name="checkbox"
            defaultChecked
          />{" "}
          <label htmlFor="checkbox">
            I agree to being sent marketing and email offers.
          </label>
        </div>
        <button
          className="openModal"
          type="submit"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          send
        </button>
      </form>
      {openModal && (
        <Modal closeModal={() => setOpenModal(false)} userName={name} />
      )}
    </div>
  );
};

export default Form;
