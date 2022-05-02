import "./Receipt.css";
import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

import StatusBar from "./StatusBar/StatusBar";
import Info from "./Info/Info";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import InfoToolTip from "../InfoToolTip/InfoToolTip";

const Receipt = ({ invoice, onDelete, onMark, onSave }) => {
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [isInfoToolTipOpen, setIsInfoToolTipOpen] = useState(false);

  const navigate = useNavigate();

  const handleEditPopupClick = () => {
    setIsEditPopupOpen(!isEditPopupOpen);
  };

  const handleInvoiceDeleteClick = () => {
    setIsInfoToolTipOpen(true);
  };

  const handleConfirmedDelete = () => {
    onDelete(invoice);
    navigate(-1);
  };

  const handleInfoToolTip = () => {
    setIsInfoToolTipOpen(!isInfoToolTipOpen);
  };

  const handleMarkAsPaidClick = () => {
    onMark(invoice);
  };

  return (
    <>
      {Object.keys(invoice).length > 0 ? (
        <section className="receipt">
          <div className="receipt__container">
            <div
              className="receipt__back-container"
              onClick={() => navigate(-1)}
            >
              <i className="receipt__back-icon"></i>
              <p className="receipt__back">Go back</p>
            </div>

            <StatusBar
              status={invoice.status}
              onEditClick={handleEditPopupClick}
              onDelete={handleInvoiceDeleteClick}
              onMark={handleMarkAsPaidClick}
            />
            <Info invoice={invoice} />
          </div>

          <PopupWithForm
            isOpen={isEditPopupOpen}
            isNew={false}
            invoice={invoice}
            onClose={handleEditPopupClick}
            onSave={onSave}
          />

          <InfoToolTip
            isOpen={isInfoToolTipOpen}
            onConfirm={handleConfirmedDelete}
            onClose={handleInfoToolTip}
          />
        </section>
      ) : (
        <Navigate to={"/"} replace />
      )}
    </>
  );
};
export default Receipt;
