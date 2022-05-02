import { useState } from "react";
import "./Payment.css";

const Payment = ({ paymentTerms, onTermClick }) => {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  const handlePaymentClick = () => {
    setIsPaymentOpen(!isPaymentOpen);
  };

  const handleTermClick = (e) => {
    onTermClick(e.target.textContent);
    setIsPaymentOpen(false);
  };

  return (
    <>
      <div className="payment" onClick={handlePaymentClick}>
        <p className="payment__current-payment">{paymentTerms}</p>
        <i
          className={`payment__icon ${
            isPaymentOpen ? "payment__icon_open" : ""
          }`}
        ></i>
      </div>

      <ul
        className={`payment__list ${isPaymentOpen ? "payment__list_open" : ""}`}
      >
        <li className="payment__item" onClick={handleTermClick}>
          Net 1 Day
        </li>
        <li className="payment__item" onClick={handleTermClick}>
          Net 7 Days
        </li>
        <li className="payment__item" onClick={handleTermClick}>
          Net 14 Days
        </li>
        <li className="payment__item" onClick={handleTermClick}>
          Net 30 Days
        </li>
      </ul>
    </>
  );
};
export default Payment;
