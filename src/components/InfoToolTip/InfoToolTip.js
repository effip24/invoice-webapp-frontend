import "./InfoToolTip.css";

const InfoToolTip = ({ isOpen, onConfirm, onClose }) => {
  return (
    <div className={`tool-tip ${isOpen ? "tool-tip_open" : ""}`}>
      <div className="tool-tip__container">
        <p className="tool-tip__title">Confirm Deletion</p>
        <p className="tool-tip__text">
          Are you sure you want to delete invoice #XM9141? This action cannot be
          undone.
        </p>

        <div className="tool-tip__buttons-container">
          <button
            type="button"
            className="tool-tip__button tool-tip__button_type_save"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="tool-tip__button tool-tip__button_type_delete"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default InfoToolTip;
