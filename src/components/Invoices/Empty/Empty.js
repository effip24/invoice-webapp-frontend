import empty from "../../../images/assets/illustration-empty.svg";

const Empty = () => {
  return (
    <div className="invoices__empty-wrap">
      <img className="invoices__empty-img" src={empty} alt="empty"></img>

      <div className="invoices__empty-title-wrap">
        <p className="invoices__empty-title">There is nothing here</p>
        <p className="invoices__empty-text">
          {" "}
          Create an invoice by clicking the New Invoice button and get started
        </p>
      </div>
    </div>
  );
};
export default Empty;
