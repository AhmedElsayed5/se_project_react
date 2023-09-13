import "./ModalWithForm.css";
import closeButton from "../../images/CloseButton.svg";
const ModalWithForm = ({
  children,
  buttonText,
  title,
  onClose,
  name,
  onSubmit,
  isOpen,
}) => {
  console.log("ModalWithForm");
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <button type="button" onClick={onClose} className="modal__close-button">
          <img src={closeButton} alt={name}></img>
        </button>
        <h3 className="modal__title">{title}</h3>
        <form onSubmit={onSubmit} className="modal__labels">
          {children}
          <button className="modal__button-submit" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
