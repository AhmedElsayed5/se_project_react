import "./ModalWithForm.css";
import closeButton from "../images/CloseButton.svg"; //src/images/CloseButton.svg
const ModalWithForm = ({
  children,
  buttonText = "Add Garment",
  title,
  onClose,
  name,
  onSubmit,
}) => {
  console.log("ModalWithForm");
  return (
    // <div className={`modal modal_type_${name}`}>
    //   <div className="modal__content">
    //     <button
    //       className="ItemModal__close-button"
    //       type="button"
    //       onClick={onClose}
    //     ></button>
    //     <h3>{title}</h3>
    //     <form>{children}</form>
    //     <button type="submit">{buttonText} </button>
    //   </div>
    // </div>
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <button type="button" onClick={onClose} className="modal__close-button">
          <img src={closeButton} alt="close button" />
        </button>
        <h3 className="modal__title">{title}</h3>
        <form onSubmit={onSubmit}>
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
