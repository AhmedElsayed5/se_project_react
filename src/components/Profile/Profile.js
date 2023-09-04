import { React, useState } from "react";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

// const [activeModal, setActiveModal] = useState("");

const Profile = ({ items, onSelectCard, onCreateItemModal, onEditModal }) => {
  console.log("Profile");
  return (
    <div className="profile profile-section">
      <SideBar onEditModal={onEditModal} />
      <ClothesSection
        items={items}
        onSelectCard={onSelectCard}
        onCreateItemModal={onCreateItemModal}
      />
    </div>
  );
};
export default Profile;
