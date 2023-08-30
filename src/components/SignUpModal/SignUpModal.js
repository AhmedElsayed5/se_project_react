import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const SignUp = ({ handleCloseModal, onSignUp, isOpen }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const [avatar, setUrl] = useState("");
  const handleUrlChange = (e) => {
    console.log(e.target.value);
    setUrl(e.target.value);
  };

  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const [password, setPassWord] = useState("");
  const handlePassWordChange = (e) => {
    console.log(e.target.value);
    setPassWord(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignUp({ email, password, name, avatar });
  };
  return (
    <ModalWithForm
      title="Sign Up"
      className="modal__title"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
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
        <label className="modal__label">
          Name
          <input
            className="modal__input"
            type="text"
            name="name"
            minLength="1"
            maxLength="30"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
          ></input>
        </label>
      </fieldset>
      <fieldset className="form__field">
        <label className="modal__label">
          Avatar URL
          <input
            className="modal__input"
            type="url"
            name="avatar"
            minLength="1"
            maxLength="3000"
            placeholder="Avatar URL"
            value={avatar}
            onChange={handleUrlChange}
          ></input>
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default SignUp;
