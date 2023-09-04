import React, { useContext, useState } from "react";
import "./ItemModal.css";
import closeButton from "../../images/CloseButton.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ItemModal = ({ selectedCard, onClose, onDelete }) => {
  const { currentUser } = useContext(CurrentUserContext);
  console.log(currentUser);
  console.log(selectedCard);
  const isOwn = selectedCard.owner === currentUser._id;
  console.log("item modal");
  // const itemDeleteButtonClassName = `item__delete-button ${isOwn}? 'item__delete-button_visible' : 'item__delete-button_hidden'}`;
  return (
    <div className={`modal`}>
      <div className="modal__content modal__content_preview">
        <button type="button" onClick={onClose} className="modal__close-button">
          <img src={closeButton} alt="close button" />
        </button>
        <img
          src={selectedCard?.link || selectedCard?.imageUrl}
          alt={selectedCard.name}
          className="modal__image-preview"
        />
        <div className="modal__text-container">
          <div className="modal__preview-text">
            <div>{selectedCard.name}</div>
            <div>Weather type: {selectedCard.weather}</div>
          </div>
          <button
            className={
              isOwn
                ? "item__delete-button_visible"
                : "item__delete-button_hidden"
            }
            onClick={() => onDelete(selectedCard?._id || selectedCard?.id)}
          >
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
