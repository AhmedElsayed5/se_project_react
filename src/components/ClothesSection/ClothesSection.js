import React, { useContext, useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";
import addclothes from "../../images/Addclothes2.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ClothesSection = ({
  items,
  onSelectCard,
  onCreateItemModal,
  onLikeButton,
  isLoggedIn,
}) => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <div className="clothes-section__title">Your Items</div>
        <button
          type="text"
          onClick={onCreateItemModal}
          className="clothes-section__add-button"
        >
          + Add new
        </button>
      </div>
      <div className="card__container">
        {items
          ?.filter((item) => item.owner === currentUser._id)
          .map((item, index) => (
            <ItemCard
              isLoggedIn={isLoggedIn}
              item={item}
              key={index}
              onSelectCard={onSelectCard}
              onLikeButton={onLikeButton}
            />
          ))}
      </div>
    </div>
  );
};
export default ClothesSection;
