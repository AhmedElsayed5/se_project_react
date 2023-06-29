import React from "react";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

const Profile = ({ items, onSelectCard, onCreateModal }) => {
  console.log("Profile");
  return (
    <div className="profile profile-section">
      <SideBar />
      <ClothesSection
        items={items}
        onSelectCard={onSelectCard}
        onCreateModal={onCreateModal}
      />
    </div>
  );
};
export default Profile;
