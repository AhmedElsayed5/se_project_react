import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LogIn = ({ handleCloseModal, onLogIn, isOpen, onChangeModal }) => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  //comment

  const [password, setPassWord] = useState("");
  const handlePassWordChange = (e) => {
    console.log(e.target.value);
    setPassWord(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogIn({ email, password });
  };

  return (
    <ModalWithForm
      title="Log In"
      buttonText="Log In"
      className="modal__title"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      onChangeModal={onChangeModal}
    >
      <fieldset className="form__field">
        <label className="modal__label">
          Email
          <input
            className="modal__input"
            type="text"
            name="email"
            minLength="1"
            maxLength="60"
            placeholder="Email"
            value={email}
            required={true}
            onChange={handleEmailChange}
          ></input>
        </label>
        <label className="modal__label">
          Password
          <input
            className="modal__input"
            type="password"
            name="password"
            minLength="1"
            maxLength="30"
            placeholder="Password"
            value={password}
            required={true}
            onChange={handlePassWordChange}
          ></input>
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default LogIn;
