import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const EditProfile = ({ handleCloseModal, onEditProfile, isOpen }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // onSignUp({ email, password, name, avatar });
    onEditProfile({ name, avatar });
  };
  return (
    <ModalWithForm
      title="Edit Profile"
      className="modal__title"
      buttonText="Save Changes"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <fieldset className="form__field">
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

export default EditProfile;
