import "./ItemsFields.css";

import { isMobileScreen } from "../../../utils/utils";

const ItemsFields = ({ items, onChange, onNewItem, onItemDelete }) => {
  const isMobile = isMobileScreen();

  return (
    <div className="popup-items">
      <p className="popup-items__title">Item List</p>
      <ul className="popup-items__table">
        {!isMobile ? (
          <>
            <li className="popup-items__table-wrap popup-items__table-wrap_type_name">
              <p className="popup-items__table-title">Item Name</p>

              {items.map((item, id) => (
                <input
                  name="name"
                  className="popup-items__table-input"
                  value={item.name || ""}
                  onChange={(e) => onChange(id, e)}
                  key={id}
                ></input>
              ))}
            </li>

            <li className="popup-items__table-wrap popup-items__table-wrap_type_quantity">
              <p className="popup-items__table-title">Qty.</p>

              {items.map((item, id) => (
                <input
                  name="quantity"
                  className="popup-items__table-input"
                  value={item.quantity || ""}
                  onChange={(e) => onChange(id, e)}
                  key={id}
                ></input>
              ))}
            </li>

            <li className="popup-items__table-wrap popup-items__table-wrap_type_price">
              <p className="popup-items__table-title">Price</p>

              {items.map((item, id) => (
                <input
                  name="price"
                  className="popup-items__table-input"
                  value={item.price || ""}
                  onChange={(e) => onChange(id, e)}
                  key={id}
                ></input>
              ))}
            </li>

            <li className="popup-items__table-wrap">
              <p className="popup-items__table-title">Total</p>

              {items.map((item, id) => (
                <div className="popup-items__total-wrap" key={id}>
                  <input
                    name="total"
                    className="popup-items__table-input"
                    value={item.total || ""}
                    disabled
                    onChange={(e) => onChange(id, e)}
                  ></input>

                  <i
                    className="popup-items__delete"
                    onClick={() => onItemDelete(id)}
                  ></i>
                </div>
              ))}
            </li>
          </>
        ) : (
          items.map((item, id) => (
            <li className="popup-items__mobile-table-wrap" key={id}>
              <div className="popup-items__table-wrap">
                <p className="popup-items__table-title">Item Name</p>
                <input
                  name="name"
                  className="popup-items__table-input"
                  value={item.name || ""}
                  onChange={(e) => onChange(id, e)}
                ></input>
              </div>

              <div className="popup-items__mobile-bottom">
                <div className="popup-items__table-wrap popup-items__table-wrap_type_quantity">
                  <p className="popup-items__table-title">Qty.</p>
                  <input
                    name="quantity"
                    className="popup-items__table-input"
                    value={item.quantity || ""}
                    onChange={(e) => onChange(id, e)}
                  ></input>
                </div>

                <div className="popup-items__table-wrap popup-items__table-wrap_type_price">
                  <p className="popup-items__table-title">Price</p>
                  <input
                    name="price"
                    className="popup-items__table-input"
                    value={item.price || ""}
                    onChange={(e) => onChange(id, e)}
                  ></input>
                </div>

                <div className="popup-items__table-wrap popup-items__table-wrap_type_price">
                  <p className="popup-items__table-title">Total</p>
                  <input
                    disabled
                    name="quantity"
                    className="popup-items__table-input"
                    value={item.total || ""}
                    onChange={(e) => onChange(id, e)}
                  ></input>
                </div>
                <i
                  className="popup-items__delete"
                  onClick={() => onItemDelete(id)}
                ></i>
              </div>
            </li>
          ))
        )}
      </ul>

      <button type="button" className="popup-items__add" onClick={onNewItem}>
        + Add New Item
      </button>
    </div>
  );
};
export default ItemsFields;
