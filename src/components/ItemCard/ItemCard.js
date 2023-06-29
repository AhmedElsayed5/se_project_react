import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div className="card__container">
      <div>
        <img
          src={item?.link || item?.imageUrl}
          className="card__image"
          onClick={() => onSelectCard(item)}
          alt={item.name}
        />
      </div>
      <div className="card__name">{item.name}</div>
    </div>
  );
};

export default ItemCard;
