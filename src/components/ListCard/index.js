import "./index.css";

export const ListCard = ({ item, onClick }) => {
  return (
    <div className="list-card-container" onClick={() => onClick(item)}>
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
          {item?.name}
        </span>
        <span className="list-card-text-item-quantity">{`${item?.quantity} ${
          item?.quantity > 1 ? "unidades" : "unidade"
        }`}</span>
      </div>
      <img className="arrow-icon" src="/images/arrow.svg" alt="arrow-icon" />
    </div>
  );
};
