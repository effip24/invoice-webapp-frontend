const PopupButtons = ({ isNew, onCancel, onDraft, isValid }) => {
  return (
    <>
      {isNew ? (
        <div className="popup__buttons-container">
          <button
            type="button"
            className="popup__button popup__button_type_white"
            onClick={onCancel}
          >
            Discard
          </button>

          <div className="popup__save-wrap">
            <button
              type="submit"
              className="popup__button popup__button_type_black"
              onClick={onDraft}
            >
              Save as Draft
            </button>
            <button
              type="submit"
              className={`popup__button ${
                isValid ? "" : "popup__button_disabled"
              } popup__button_type_purple`}
            >
              Save & Send
            </button>
          </div>
        </div>
      ) : (
        <div className="popup__save-wrap" style={{ alignSelf: "flex-end" }}>
          <button
            type="button"
            className="popup__button popup__button_type_white"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="popup__button popup__button_type_purple"
          >
            Save Changes
          </button>
        </div>
      )}
    </>
  );
};
export default PopupButtons;
