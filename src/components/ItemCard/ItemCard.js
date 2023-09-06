import "./ItemCard.css";
import React, { useContext, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import likebutton from "../../images/Like-button.svg";

const ItemCard = ({ item, onSelectCard, onLikeButton }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const [isLiked, setIsLiked] = useState(
    item.likes.some((like) => like === currentUser._id)
  );
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
      <div className="card__name">
        {item.name}
        {isLiked ? (
          <button>
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
          <button>
            <img
              src={likebutton}
              className="card__like-button__unliked"
              onClick={() => {
                onLikeButton(isLiked, item._id);
                setIsLiked(!isLiked);
              }}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
