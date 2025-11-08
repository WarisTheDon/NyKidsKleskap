import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AddListing from "./pages/AddListing";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";

function App() {
  // Eksempel-lister som vises på Home / Profile
  const [listings, setListings] = useState([
    { id: 1, title: "Babyjakke blå", description: "Pent brukt, 1 år", price: "150kr", image: "https://via.placeholder.com/150" },
    { id: 2, title: "Småbarn bukse", description: "Aldri brukt", price: "100kr", image: "https://via.placeholder.com/150" }
  ]);

  return (
    <Router>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home listings={listings} />} />
          <Route path="/add" element={<AddListing listings={listings} setListings={setListings} />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/profile" element={<Profile listings={listings} />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
