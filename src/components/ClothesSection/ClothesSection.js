import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";
import addclothes from "../../images/Addclothes2.svg";

const ClothesSection = ({ items, onSelectCard, onCreateModal }) => {
  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <div>Your Items</div>
        <button
          type="text"
          onClick={onCreateModal}
          className="clothes-section__add-button"
        >
          <img src={addclothes} alt="Add Button" />
        </button>
      </div>
      <div className="card__container">
        {items.map((item, index) => (
          <ItemCard item={item} key={index} onSelectCard={onSelectCard} />
        ))}
      </div>
    </div>
  );
};
export default ClothesSection;
