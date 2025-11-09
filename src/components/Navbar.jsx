import React from "react";
import { Link } from "react-router-dom";
import "../styles/app.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Kids Klesskap</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add">Legg ut annonse</Link></li>
        <li><Link to="/messages">Meldinger</Link></li>
        <li><Link to="/profile">Profil</Link></li>
        <li><Link to="/register">Register</Link></li> {/* <-- NY */}
      </ul>
    </nav>
  );
};

export default Navbar;
