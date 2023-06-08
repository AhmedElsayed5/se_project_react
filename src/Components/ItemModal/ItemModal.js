import "./ItemModal.css";
import closeButton from "../images/CloseButton.svg"; //src/images/CloseButton.svg

const ItemModal = ({ selectedCard, onClose }) => {
  console.log("item modal");
  return (
    // <div className={"modal"}>
    //   <div className="modal__content">
    //     <button
    //       className="ItemModal__close-button"
    //       type="button"
    //       onClick={onClose}
    //     ></button>
    //     <img className="ItemModal__image" src={selectedCard.link} />
    //     <div>{selectedCard.name}</div>
    //     <div>Weather type: {selectedCard.weather}</div>
    //   </div>
    // </div>
    <div className={`modal`}>
      <div className="modal__content modal__content_preview">
        <button type="button" onClick={onClose} className="modal__close-button">
          <img src={closeButton} alt="close button" />
        </button>
        <img
          src={selectedCard.link}
          alt="preview"
          className="modal__image-preview"
        />
        <div className="modal__text-container">
          <div className="modal__preview-text">
            <div>{selectedCard.name}</div>
            <div>Weather type: {selectedCard.weather}</div>
          </div>
          {/* <div className="modal__delete" onClick={() => onDelete(selectedCard)}>
            delete item
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
