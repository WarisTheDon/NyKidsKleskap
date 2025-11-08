import React from "react";
import Card from "../components/Card";

const Profile = ({ listings }) => {
  return (
    <div className="profile">
      <h2>Min profil</h2>
      <p>Dine annonser:</p>
      <div className="cards-container">
        {listings.length === 0 && <p>Du har ingen annonser enda.</p>}
        {listings.map((listing) => (
          <Card key={listing.id} {...listing} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
