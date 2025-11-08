import React, { useState } from "react";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";

const Home = ({ listings }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredListings = listings.filter((listing) =>
    listing.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home">
      <h2>Alle annonser</h2>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="cards-container">
        {filteredListings.map((listing) => (
          <Card key={listing.id} {...listing} />
        ))}
        {filteredListings.length === 0 && <p>Ingen annonser funnet.</p>}
      </div>
    </div>
  );
};

export default Home;
