const Filter = ({
  isOpen,
  onFilterClick,
  onNewClick,
  onCheckClick,
  filterType,
  isMobile,
}) => {
  return (
    <div className="invoices__filter-container">
      <div className="invoices__filter-wrap" onClick={onFilterClick}>
        <p className="invoices__filter-title">{`${
          isMobile ? "Filter" : "Filter by status"
        }`}</p>
        <i className="invoices__filter-icon"></i>
      </div>

      <button className="invoices__new-button" onClick={onNewClick}>
        <i className="invoices__new-icon"></i>
        New Invoice
      </button>

      <div
        className={`invoices__filter ${isOpen ? "invoices__filter_open" : ""}`}
      >
        <div className="invoices__filter-type-wrap">
          <div
            className={`invoices__filter-check ${
              filterType.draft ? "invoices__filter-check_checked" : ""
            }`}
            onClick={onCheckClick}
          ></div>
          <p className="invoices__filter-name">Draft</p>
        </div>

        <div className="invoices__filter-type-wrap">
          <div
            className={`invoices__filter-check ${
              filterType.pending ? "invoices__filter-check_checked" : ""
            }`}
            onClick={onCheckClick}
          ></div>
          <p className="invoices__filter-name">Pending</p>
        </div>

        <div className="invoices__filter-type-wrap">
          <div
            className={`invoices__filter-check ${
              filterType.paid ? "invoices__filter-check_checked" : ""
            }`}
            onClick={onCheckClick}
          ></div>
          <p className="invoices__filter-name">Paid</p>
        </div>
      </div>
    </div>
  );
};
export default Filter;
