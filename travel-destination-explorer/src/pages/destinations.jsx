import React, { useState } from "react";
import destinations from "../data/destinations";
import "./destinations.css";

function Destinations() {
    const [filter, setFilter] = useState("All");
    const [searchTerm, setSearchTerm] = useState(""); // ✅ NEW
  
    const filteredDestinations = destinations
      .filter((dest) =>
        filter === "All" ? true : dest.category === filter
      )
      .filter((dest) =>
        dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dest.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
  
    const handleSaveToFavorites = (destination) => {
      const existingFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
      if (!existingFavorites.some((fav) => fav.name === destination.name)) {
        const updated = [...existingFavorites, destination];
        localStorage.setItem("favorites", JSON.stringify(updated));
        alert(`${destination.name} added to your favorites!`);
      } else {
        alert(`${destination.name} is already in your favorites.`);
      }
    };
  
    return (
      <div className="destinations-page">
        <h1>Explore Destinations</h1>
  
        {/* ✅ SEARCH BAR */}
        <input
          type="text"
          placeholder="Search destinations..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
  
        {/* CATEGORY FILTER BUTTONS */}
        <div className="filters">
          <button onClick={() => setFilter("All")}>All</button>
          <button onClick={() => setFilter("Food")}>🍜 Food</button>
          <button onClick={() => setFilter("Nature")}>🌲 Nature</button>
          <button onClick={() => setFilter("History")}>🏛️ History</button>
          <button onClick={() => setFilter("Fun")}>🎉 Fun</button>
        </div>
  
        <div className="destinations-grid">
          {filteredDestinations.map((destination, index) => (
            <div key={index} className="destination-card">
              <img src={destination.image} alt={destination.name} />
              <h3>{destination.name}</h3>
              <p>{destination.description}</p>
              <button
                onClick={() => handleSaveToFavorites(destination)}
                className="save-button"
              >
                ❤️ Save to Favorites
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Destinations;