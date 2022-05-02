import "./Invoices.css";
import { useEffect, useState } from "react";
import { isMobileScreen, filter, check } from "../../utils/utils";

import Invoice from "../Invoice/Invoice";
import Filter from "./Filter/Filter";
import Empty from "./Empty/Empty";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

const Invoices = ({ invoices, onInvoiceClick, onSave }) => {
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [filteredInvoices, setFilteredInvoices] = useState([]);

  const [filterType, setFilterType] = useState({
    draft: false,
    paid: false,
    pending: false,
  });

  const isMobile = isMobileScreen();

  useEffect(() => {
    setFilteredInvoices(filter(invoices, filterType));
  }, [filterType]);

  const handleNewInvoiceClick = () => {
    setIsAddPopupOpen(!isAddPopupOpen);
  };

  const handleFilterClick = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleCheckClick = (e) => {
    check(e, filterType, setFilterType);
  };

  return (
    <section className="invoices">
      <div className="invoices__container">
        <div className="invoices__top-container">
          <div className="invoices__title-wrap">
            <h1 className="invoices__title">Invoices</h1>
            <p className="invoices__subtitle">{`${
              isMobile
                ? `${invoices.length} invoices`
                : `There are ${
                    filterType.draft || filterType.paid || filterType.pending
                      ? filteredInvoices.length
                      : invoices.length
                  } total invoices`
            }`}</p>
          </div>

          <Filter
            isOpen={isFilterOpen}
            onFilterClick={handleFilterClick}
            onNewClick={handleNewInvoiceClick}
            onCheckClick={handleCheckClick}
            filterType={filterType}
            isMobile={isMobile}
          />
        </div>

        {invoices.length ? (
          <ul className="invoices__list">
            {filterType.draft || filterType.paid || filterType.pending ? (
              filteredInvoices.length ? (
                filteredInvoices.map((invoice, id) => (
                  <Invoice
                    key={id}
                    invoice={invoice}
                    onInvoiceClick={onInvoiceClick}
                  />
                ))
              ) : (
                <Empty />
              )
            ) : (
              invoices.map((invoice, id) => (
                <Invoice
                  key={id}
                  invoice={invoice}
                  onInvoiceClick={onInvoiceClick}
                />
              ))
            )}
          </ul>
        ) : (
          <Empty />
        )}
      </div>
      <PopupWithForm
        isOpen={isAddPopupOpen}
        isNew={true}
        onClose={handleNewInvoiceClick}
        onSave={onSave}
      />
    </section>
  );
};
export default Invoices;
