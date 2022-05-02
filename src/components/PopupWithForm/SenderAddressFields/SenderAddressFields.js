const SenderAddressFields = ({ values, errors, onChange }) => {
  return (
    <div className="popup__bill-contianer">
      <label className="popup__inputs-label">Bill From</label>
      <div className="popup__input-wrap">
        <div className="popup__input-label-wrap">
          <label className="popup__input-label">Street Address</label>
          <label className="popup__input-error">{errors.senderStreet}</label>
        </div>
        <input
          required
          type="text"
          name="senderStreet"
          className={`popup__input ${
            errors.senderStreet ? "popup__input_type_error" : ""
          }`}
          onChange={onChange}
          value={values.senderStreet || ""}
        ></input>
      </div>

      <div className="popup__address-container">
        <div className="popup__input-wrap">
          <label className="popup__input-label">City</label>
          <input
            required
            type="text"
            name="senderCity"
            className={`popup__input ${
              errors.senderCity ? "popup__input_type_error" : ""
            }`}
            onChange={onChange}
            value={values.senderCity || ""}
          ></input>
          <label className="popup__input-error">{errors.senderCity}</label>
        </div>

        <div className="popup__input-wrap">
          <label className="popup__input-label">Post Code</label>
          <input
            required
            pattern="[0-9a-zA-Z]{1,9}"
            name="senderPostCode"
            className={`popup__input ${
              errors.senderPostCode ? "popup__input_type_error" : ""
            }`}
            value={values.senderPostCode || ""}
            onChange={onChange}
          ></input>
          <label className="popup__input-error">{errors.senderPostCode}</label>
        </div>

        <div className="popup__input-wrap">
          <label className="popup__input-label">Country</label>
          <input
            required
            pattern="[a-zA-Z\s]{1,9}"
            name="senderCountry"
            className={`popup__input ${
              errors.senderCountry ? "popup__input_type_error" : ""
            }`}
            value={values.senderCountry || ""}
            onChange={onChange}
          ></input>
          <label className="popup__input-error">{errors.senderCountry}</label>
        </div>
      </div>
    </div>
  );
};
export default SenderAddressFields;
