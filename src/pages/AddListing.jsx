import React, { useState } from "react";

const AddListing = ({ listings, setListings }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newListing = {
      id: listings.length + 1,
      title,
      description,
      price,
      image: image || "https://via.placeholder.com/150",
    };
    setListings([...listings, newListing]);
    setTitle("");
    setDescription("");
    setPrice("");
    setImage("");
  };

  return (
    <div className="add-listing">
      <h2>Legg ut ny annonse</h2>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Tittel" required />
        <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Beskrivelse" required />
        <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Pris" required />
        <input value={image} onChange={(e) => setImage(e.target.value)} placeholder="Bilde-URL (valgfritt)" />
        <button type="submit">Legg ut</button>
      </form>
    </div>
  );
};

export default AddListing;
