import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ handleCloseModal, onAddItem, isOpen }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const [imageUrl, setUrl] = useState("");
  const handleUrlChange = (e) => {
    console.log(e.target.value);
    setUrl(e.target.value);
  };

  const [weather, setWeather] = useState("");
  const handleWeatherChange = (e) => {
    console.log(e.target.value);
    setWeather(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, imageUrl, weather });
  };
  return (
    <ModalWithForm
      title="New garment"
      className="modal__title"
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
          Image
          <input
            className="modal__input"
            type="url"
            name="imageUrl"
            minLength="1"
            maxLength="3000"
            placeholder="Image"
            value={imageUrl}
            onChange={handleUrlChange}
          ></input>
        </label>
      </fieldset>
      <fieldset className="form__field">
        <p className="modal__paragraph">Select the weather type:</p>
        <div className="modal__radios">
          <div className="modal__radio">
            <input
              type="radio"
              id="hot"
              value="hot"
              className="modal__input-radio"
              onChange={handleWeatherChange}
            />
            <label>Hot</label>
          </div>
          <div className="modal__radio">
            <input
              type="radio"
              id="warm"
              value="warm"
              className="modal__input-radio"
              onChange={handleWeatherChange}
            />
            <label>Warm</label>
          </div>
          <div className="modal__radio">
            <input
              type="radio"
              id="cold"
              value="cold"
              className="modal__input-radio"
              onChange={handleWeatherChange}
            />
            <label>Cold</label>
          </div>
        </div>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
