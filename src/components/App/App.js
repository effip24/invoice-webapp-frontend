import "./App.css";

import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import demoData from "../../utils/data.json";
import SideNav from "../SideNav/SideNav";
import Invoices from "../Invoices/Invoices";
import Receipt from "../Receipt/Receipt";
import Demo from "../Demo/Demo";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [invoices, setInvoices] = useState([]);
  const [selectedInvoice, setSelectedInvoice] = useState({});

  const [isLoggedIn, setIsLoggedIn] = useState(
    sessionStorage.getItem("isLoggedIn")
  );
  const [isDemo, setIsDemo] = useState(sessionStorage.getItem("demo"));

  const navigate = useNavigate();

  useEffect(() => {
    setInvoices(JSON.parse(sessionStorage.getItem("invoices")) || demoData);
  }, [isDemo]);

  const handleInvoiceClick = (invoice) => {
    setSelectedInvoice(invoice);
  };

  const handleInvoiceDeleteClick = (invoice) => {
    setInvoices(invoices.filter((c) => c.id !== invoice.id));
    saveToLocal(invoices.filter((c) => c.id !== invoice.id));
  };

  const handleMarkAsPaidClick = (invoice) => {
    let newInvoice = invoice;
    newInvoice.status = "paid";
    setInvoices(invoices.map((c) => (c.id === invoice.id ? newInvoice : c)));

    saveToLocal(invoices.map((c) => (c.id === invoice.id ? newInvoice : c)));
  };

  const handleInvoiceSave = (invoice, isNew, isDraft) => {
    let newInvoice = JSON.parse(JSON.stringify(invoice));

    if (isDraft) {
      newInvoice.status = "draft";
    }

    if (isNew) {
      newInvoice.id = invoices[invoices.length - 1].id + "2";
      setInvoices([newInvoice, ...invoices]);
      saveToLocal([newInvoice, ...invoices]);
    } else {
      setInvoices(invoices.map((c) => (c.id === invoice.id ? newInvoice : c)));
      setSelectedInvoice(newInvoice);
      saveToLocal(invoices.map((c) => (c.id === invoice.id ? newInvoice : c)));
    }
  };

  const handleDemoClick = () => {
    sessionStorage.setItem("demo", true);
    sessionStorage.setItem("isLoggedIn", true);
    setIsDemo(true);
    setIsLoggedIn(true);
    navigate("/");
  };

  const saveToLocal = (invoices) => {
    sessionStorage.setItem("invoices", JSON.stringify(invoices));
  };

  return (
    <div className="App">
      <SideNav />

      <Routes>
        <Route
          path="/*"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Invoices
                invoices={invoices}
                onInvoiceClick={handleInvoiceClick}
                onSave={handleInvoiceSave}
              />
            </ProtectedRoute>
          }
        />

        <Route
          path="/reciept"
          element={
            <Receipt
              invoice={selectedInvoice}
              onDelete={handleInvoiceDeleteClick}
              onMark={handleMarkAsPaidClick}
              onSave={handleInvoiceSave}
            />
          }
        />

        <Route path="/demo" element={<Demo onDemo={handleDemoClick} />} />
      </Routes>
    </div>
  );
}

export default App;
