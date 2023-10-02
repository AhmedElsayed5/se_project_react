import "./ModalWithForm.css";
import closeButton from "../../images/CloseButton.svg";
const ModalWithForm = ({
  children,
  buttonText,
  title,
  onClose,
  name,
  onSubmit,
  onChangeModal,
  isOpen,
}) => {
  console.log("ModalWithForm");
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <button type="button" onClick={onClose} className="modal__close-button">
          <img src={closeButton} alt={"Close Icon"}></img>
        </button>
        <h3 className="modal__title">{title}</h3>
        <form onSubmit={onSubmit} className="modal__labels ">
          {children}
          {title === "Log In" ? (
            <div className="modal__buttons">
              <button className="modal__button-submit" type="submit">
                {buttonText}
              </button>
              <button
                className="modal__button-register"
                onClick={onChangeModal}
              >
                or Register
              </button>
            </div>
          ) : (
            <button className="modal__button-submit" type="submit">
              {buttonText}
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
