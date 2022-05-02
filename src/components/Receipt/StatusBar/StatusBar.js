import "./StatusBar.css";

import { setStatus } from "../../../utils/utils";
import { useEffect, useState } from "react";

const StatusBar = ({ status, onEditClick, onDelete, onMark }) => {
  const [invoiceStatusWrap, setInvoiceStatusWrap] = useState("");
  const [invoiceStatusDot, setinvoiceStatusDot] = useState("");
  const [invoiceStatus, setInvoiceStatus] = useState("");

  const isPaid = status === "paid";

  useEffect(() => {
    setStatus(
      status,
      setInvoiceStatusWrap,
      setinvoiceStatusDot,
      setInvoiceStatus
    );
  }, [status]);

  return (
    <div className="status-bar">
      <div className="status-bar__status-container">
        <p className="status-bar__label">Status</p>
        <div className={`status-bar__status-wrap ${invoiceStatusWrap}`}>
          <div className={`status-bar__status-dot ${invoiceStatusDot}`}></div>
          <p className={`status-bar__status ${invoiceStatus}`}>{status}</p>
        </div>
      </div>

      <div className="status-bar__buttons-container">
        <button className="status-bar__edit" onClick={onEditClick}>
          Edit
        </button>
        <button className="status-bar__delete" onClick={onDelete}>
          Delete
        </button>
        <button
          className={`status-bar__mark ${
            isPaid ? "status-bar__mark_inactive" : ""
          }`}
          onClick={onMark}
        >
          Mark as Paid
        </button>
      </div>
    </div>
  );
};
export default StatusBar;
