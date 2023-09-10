import "./ItemCard.css";
import React, { useContext, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import likebutton from "../../images/liked-heart.svg";
import unlikebutton from "../../images/Like-button.svg";

const ItemCard = ({ item, onSelectCard, onLikeButton, isLoggedIn }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const [isLiked, setIsLiked] = useState(
    item.likes.some((like) => like === currentUser._id)
  );
  return (
    <div className="card__container">
      <div className="card__header">
        <div className="card__header-name">{item.name}</div>
        {isLoggedIn ? (
          <div className="card__header-like-button">
            {isLiked ? (
              <button className="card__like-button">
                <img
                  src={likebutton}
                  className="card__like-button__liked"
                  onClick={() => {
                    onLikeButton(isLiked, item._id);
                    setIsLiked(!isLiked);
                  }}
                />
              </button>
            ) : (
              <button className="card__like-button">
                <img
                  src={unlikebutton}
                  className="card__like-button__unliked"
                  onClick={() => {
                    onLikeButton(isLiked, item._id);
                    setIsLiked(!isLiked);
                  }}
                />
              </button>
            )}
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <img
        src={item?.link || item?.imageUrl}
        className="card__image"
        onClick={() => onSelectCard(item)}
        alt={item.name}
      />
    </div>
  );
};

export default ItemCard;
