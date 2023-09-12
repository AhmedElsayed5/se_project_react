import { React } from "react";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

// const [activeModal, setActiveModal] = useState("");

const Profile = ({
  items,
  onSelectCard,
  onCreateItemModal,
  onEditModal,
  onLogOut,
  onLikeButton,
  isLoggedIn,
}) => {
  console.log("Profile");
  return (
    <div className="profile profile-section">
      <SideBar onEditModal={onEditModal} onLogOut={onLogOut} />
      <ClothesSection
        isLoggedIn={isLoggedIn}
        items={items}
        onSelectCard={onSelectCard}
        onCreateItemModal={onCreateItemModal}
        onLikeButton={onLikeButton}
      />
    </div>
  );
};
export default Profile;
