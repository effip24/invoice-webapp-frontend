import "./Items.css";

import { isMobileScreen } from "../../../utils/utils";

const Items = ({ invoice }) => {
  const isMobile = isMobileScreen();

  return (
    <div className="items">
      <ul className="items__table">
        <li className="items__table-wrap">
          <p
            className="items__table-title"
            style={{ display: `${isMobile ? "none" : ""}` }}
          >
            Item Name
          </p>
          {invoice.items.map((item, id) => (
            <p className="items__table-name" key={id}>
              {item.name}
            </p>
          ))}
        </li>

        <li className="items__table-wrap">
          <p
            className="items__table-title"
            style={{ display: `${isMobile ? "none" : ""}` }}
          >
            QTY.
          </p>
          {invoice.items.map((item, id) => (
            <p className="items__table-name" key={id}>
              {isMobile ? `${item.quantity}x £${item.price}` : item.quantity}
            </p>
          ))}
        </li>

        <li
          className="items__table-wrap"
          style={{ display: `${isMobile ? "none" : ""}` }}
        >
          <p className="items__table-title">Price</p>
          {invoice.items.map((item, id) => (
            <p className="items__table-name" key={id}>
              {`£ ${item.price}`}
            </p>
          ))}
        </li>

        <li
          className="items__table-wrap"
          style={{ display: `${isMobile ? "none" : ""}` }}
        >
          <p className="items__table-title">Total</p>
          {invoice.items.map((item, id) => (
            <p className="items__table-name" key={id}>
              {`£ ${item.total}`}
            </p>
          ))}
        </li>
      </ul>

      <div className="items__total-container">
        <p className="item__total-label">Amount Due</p>
        <p className="item__total">{`£ ${invoice.total}`}</p>
      </div>
    </div>
  );
};
export default Items;
