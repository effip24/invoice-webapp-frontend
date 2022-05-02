import { useEffect, useState } from "react";
import "./Invoice.css";

import { setStatus } from "../../utils/utils";
import { Link } from "react-router-dom";

const Invoice = ({ invoice, onInvoiceClick }) => {
  const [invoiceStatusWrap, setInvoiceStatusWrap] = useState("");
  const [invoiceStatusDot, setinvoiceStatusDot] = useState("");
  const [invoiceStatus, setInvoiceStatus] = useState("");

  useEffect(() => {
    setStatus(
      invoice.status,
      setInvoiceStatusWrap,
      setinvoiceStatusDot,
      setInvoiceStatus
    );
  }, [invoice.status]);

  const handleInvoiceClick = () => {
    onInvoiceClick(invoice);
  };

  return (
    <li className="invoice">
      <Link
        className="invoice__container"
        to="/reciept"
        onClick={handleInvoiceClick}
      >
        <div className="invoice__left-container">
          <p className="invoice__info">
            #<span className="invoice__info_bold">{invoice.id}</span>
          </p>
          <p className="invoice__info">{invoice.createdAt}</p>
          <p className="invoice__info">{invoice.clientName}</p>
        </div>

        <div className="invoice__right-container">
          <p className="invoice__moeny">{`£ ${invoice.total}`}</p>

          <div className="invoice__status-container">
            <div className={`invoice__status-wrap ${invoiceStatusWrap}`}>
              <div className={`invoice__status-dot ${invoiceStatusDot}`}></div>
              <p className={`invoice__status ${invoiceStatus}`}>
                {invoice.status}
              </p>
            </div>

            <i className="invoice__status-icon"></i>
          </div>
        </div>
      </Link>
    </li>
  );
};
export default Invoice;
