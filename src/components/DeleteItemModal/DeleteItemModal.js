import React from "react";
import "./DeleteItemModal.css";
import closeButton from "../../images/CloseButton.svg";

const DeleteItemModal = ({ onClose, onDelete }) => {
  return (
    <div className={`modal`}>
      <div className="delete-modal__content delete-modal__paragraph">
        <button type="button" onClick={onClose} className="modal__close-button">
          <img src={closeButton} alt="close button" />
        </button>
        <p className="delete-modal__paragraph">
          Are you sure you want to delete this item ?
        </p>
        <button
          className="{`modal__preview-delete-button`} delete-modal__yes-answer delete-modal__paragraph"
          onClick={onDelete}
        >
          Yes, delete item
        </button>
        <button
          className="delete-modal__paragraph modal__preview-delete-button delete-modal__cancel-button"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteItemModal;
