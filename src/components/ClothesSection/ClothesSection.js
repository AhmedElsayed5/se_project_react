import React, { useContext, useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";
import addclothes from "../../images/Addclothes2.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ClothesSection = ({ items, onSelectCard, onCreateItemModal }) => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <div>Your Items</div>
        <button
          type="text"
          onClick={onCreateItemModal}
          className="clothes-section__add-button"
        >
          <img src={addclothes} alt="Add Button" />
        </button>
      </div>
      <div className="card__container">
        {items
          ?.filter((item) => item.owner === currentUser._id)
          .map((item, index) => (
            <ItemCard item={item} key={index} onSelectCard={onSelectCard} />
          ))}
      </div>
    </div>
  );
};
export default ClothesSection;
