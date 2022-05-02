import "./Info.css";

import Items from "../Items/Items";

const Info = ({ invoice }) => {
  return (
    <div className="info">
      <div className="info__top-container">
        <div className="info__title-wrap">
          <p className="info__title">{invoice.id}</p>
          <p className="info__text">{invoice.description}</p>
        </div>

        <div className="info__address">
          <p className="info__text">{invoice.clientAddress.street},</p>
          <p className="info__text">{invoice.clientAddress.city},</p>
          <p className="info__text">{invoice.clientAddress.postCode},</p>
          <p className="info__text">{invoice.clientAddress.country}</p>
        </div>
      </div>

      <div className="info__bottom-container">
        <div className="info__left-container">
          <div className="info__payment-wrap">
            <div className="info__title-wrap">
              <p className="info__text">Invoice Date</p>
              <p className="info__title">{invoice.createdAt}</p>
            </div>

            <div className="info__title-wrap">
              <p className="info__text">Payment Due</p>
              <p className="info__title">{invoice.paymentDue}</p>
            </div>
          </div>

          <div className="info__title-wrap">
            <p className="info__text">Bill To</p>
            <p className="info__title">{invoice.clientName}</p>

            <div className="info__address">
              <p className="info__text">{invoice.senderAddress.street},</p>
              <p className="info__text">{invoice.senderAddress.city},</p>
              <p className="info__text">{invoice.senderAddress.postCode},</p>
              <p className="info__text">{invoice.senderAddress.country}</p>
            </div>
          </div>
        </div>

        <div className="info__title-wrap">
          <p className="info__text">Sent to</p>
          <p className="info__title">{invoice.clientEmail}</p>
        </div>
      </div>

      <Items invoice={invoice} />
    </div>
  );
};
export default Info;
