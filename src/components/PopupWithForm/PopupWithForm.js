import "./PopupWithForm.css";
import { useEffect, useState } from "react";
import { newInvoice, fillInvoice, fillTerms } from "../../utils/utils";
import calendar from "../../utils/date";

import SenderAddressFields from "./SenderAddressFields/SenderAddressFields";
import RecipientAddressFields from "./RecipientAddressFields/RecipientAddressFields";

import DatePicker from "./DatePicker/DatePicker";
import Payment from "./Payment/Payment";
import ItemsFields from "./ItemsFields/ItemsFields";
import PopupButtons from "./PopupButtons/PopupButtons";

import useFormAndValidation from "../../utils/useFormAndValidation";

const PopupWithForm = ({ isOpen, isNew, invoice, onClose, onSave }) => {
  const {
    values,
    itemsFields,
    errors,
    isValid,
    handleChange,
    handleItemChange,
    handleNewItem,
    handleDeleteItem,
    resetForm,
    setValues,
    setItemsFields,
    setIsValid,
  } = useFormAndValidation();

  const [paymentDue, setPaymentDue] = useState("");
  const [paymentTerms, setPaymentTerms] = useState("");

  const [isDraft, setIsDraft] = useState(false);

  useEffect(() => {
    resetForm();

    if (isNew) {
      setPaymentDue(calendar.getTodaysDate());
      setPaymentTerms(1);
    } else {
      const cpyItems = JSON.parse(JSON.stringify(invoice.items));
      fillTerms(invoice.paymentTerms, setPaymentTerms);
      fillInvoice(invoice, setValues);
      setPaymentDue(invoice.paymentDue);
      setItemsFields(cpyItems);
    }
  }, [isOpen]);

  const handlePaymentTerms = (term) => {
    setPaymentTerms(term);
  };

  const handleDatePick = (date) => {
    setPaymentDue(date);
  };

  const handleDraftClick = () => {
    setIsDraft(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave(
      newInvoice(invoice, values, isNew, itemsFields, paymentTerms, paymentDue),
      isNew,
      isDraft
    );
    setIsDraft(false);
    onClose();
  };

  return (
    <div className={`popup ${isOpen ? "popup_open" : ""}`}>
      <form className="popup__form" noValidate onSubmit={handleSubmit}>
        <SenderAddressFields
          values={values}
          errors={errors}
          onChange={handleChange}
        />
        <RecipientAddressFields
          values={values}
          errors={errors}
          onChange={handleChange}
        />

        <div className="popup__payment-container">
          <div className="popup__input-wrap">
            <label className="popup__input-label">Invoice Date</label>
            <DatePicker
              date={invoice?.paymentDue}
              onDatePick={handleDatePick}
              isOpen={isOpen}
            />
          </div>

          <div className="popup__input-wrap">
            <label className="popup__input-label">Payment Terms</label>
            <Payment
              paymentTerms={paymentTerms}
              onTermClick={handlePaymentTerms}
            />
          </div>

          <div className="popup__input-wrap">
            <label className="popup__input-label">Project Description</label>
            <input
              required
              placeholder="e.g. Graphic Design Service"
              name="description"
              type="text"
              className={`popup__input ${
                errors.description ? "popup__input_type_error" : ""
              }`}
              value={values.description || ""}
              onChange={handleChange}
            ></input>
            <label className="popup__input-error">{errors.description}</label>
          </div>
        </div>

        <ItemsFields
          items={itemsFields}
          onNewItem={handleNewItem}
          onItemDelete={handleDeleteItem}
          onChange={handleItemChange}
        />

        <PopupButtons
          isNew={isNew}
          isOpen={isOpen}
          onCancel={onClose}
          onDraft={handleDraftClick}
          isValid={isValid}
        />
      </form>
    </div>
  );
};
export default PopupWithForm;
