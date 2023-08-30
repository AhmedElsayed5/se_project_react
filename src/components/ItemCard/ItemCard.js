import "./ItemCard.css";
import React, { useContext, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ItemCard = ({ item, onSelectCard }) => {
  const { currentUser } = useContext(CurrentUserContext);
  console.log({ currentUser });
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
