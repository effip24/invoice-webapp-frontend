const RecipientAddressFields = ({ values, errors, onChange }) => {
  return (
    <div className="popup__bill-contianer">
      <label className="popup__inputs-label">Bill To</label>
      <div className="popup__input-wrap">
        <div className="popup__input-label-wrap">
          <label className="popup__input-label">Client’s Name</label>
          <label className="popup__input-error">{errors.clientName}</label>
        </div>
        <input
          required
          pattern="[a-zA-Z\s]{1,32}"
          name={"clientName"}
          className={`popup__input ${
            errors.clientName ? "popup__input_type_error" : ""
          }`}
          value={values.clientName || ""}
          onChange={onChange}
        ></input>
      </div>

      <div className="popup__input-wrap">
        <div className="popup__input-label-wrap">
          <label className="popup__input-label">Client’s Email</label>
          <label className="popup__input-error">{errors.clientEmail}</label>
        </div>
        <input
          required
          type="email"
          placeholder="e.g. email@example.com"
          name={"clientEmail"}
          className={`popup__input ${
            errors.clientEmail ? "popup__input_type_error" : ""
          }`}
          value={values.clientEmail || ""}
          onChange={onChange}
        ></input>
      </div>

      <div className="popup__input-wrap">
        <div className="popup__input-label-wrap">
          <label className="popup__input-label">Street Address</label>
          <label className="popup__input-error">{errors.clientStreet}</label>
        </div>
        <input
          required
          type="text"
          name={"clientStreet"}
          className={`popup__input ${
            errors.clientStreet ? "popup__input_type_error" : ""
          }`}
          value={values.clientStreet || ""}
          onChange={onChange}
        ></input>
      </div>

      <div className="popup__address-container">
        <div className="popup__input-wrap">
          <label className="popup__input-label">City</label>
          <input
            required
            type="text"
            name="clientCity"
            className={`popup__input ${
              errors.clientCity ? "popup__input_type_error" : ""
            }`}
            value={values.clientCity || ""}
            onChange={onChange}
          ></input>
          <label className="popup__input-error">{errors.clientCity}</label>
        </div>

        <div className="popup__input-wrap">
          <label className="popup__input-label">Post Code</label>
          <input
            required
            pattern="[0-9a-zA-Z]{1,9}"
            name="clientPostCode"
            className={`popup__input ${
              errors.clientPostCode ? "popup__input_type_error" : ""
            }`}
            value={values.clientPostCode || ""}
            onChange={onChange}
          ></input>
          <label className="popup__input-error">{errors.clientPostCode}</label>
        </div>

        <div className="popup__input-wrap">
          <label className="popup__input-label">Country</label>
          <input
            required
            pattern="[a-zA-Z\s]{1,9}"
            name="clientCountry"
            className={`popup__input ${
              errors.clientCountry ? "popup__input_type_error" : ""
            }`}
            value={values.clientCountry || ""}
            onChange={onChange}
          ></input>
          <label className="popup__input-error">{errors.clientCountry}</label>
        </div>
      </div>
    </div>
  );
};
export default RecipientAddressFields;
