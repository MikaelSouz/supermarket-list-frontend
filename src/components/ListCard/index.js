import "./index.css";

export const ListCard = (props) => {
  const { item } = props;
  // item.checked = true;

  return (
    <div
      className={`${
        item?.checked ? "list-card-container-checked" : "list-card-container"
      }`}
    >
      <img
        className="checkbox"
        src={`/images/${item?.checked ? "checked.svg" : "unchecked.svg"}`}
        alt="checked-item"
      />
      <div className="list-card-text-container">
        <span
          className={`${
            item?.checked
              ? "list-card-text-item-name-checked"
              : "list-card-text-item-name"
          }`}
        >
          {props.item.name}
        </span>
        <span className="list-card-text-item-quantity">{`${
          props.item.quantity
        } ${props.item.quantity > 1 ? "unidades" : "unidade"}`}</span>
      </div>
      <img className="arrow-icon" src="/images/arrow.svg" alt="arrow-icon" />
    </div>
  );
};
