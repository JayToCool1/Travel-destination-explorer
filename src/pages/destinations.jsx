import React, { useState, useEffect } from "react";
import destinations from "../data/destinations";
import Category from "../components/CategoryFilter";
import "./destinations.css";
import { useLocation } from "react-router-dom";

function Destinations() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryFromURL = queryParams.get("category");

  const [filter, setFilter] = useState(categoryFromURL || "All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (categoryFromURL) {
      setFilter(categoryFromURL);
    }
  }, [categoryFromURL]);

  const filteredDestinations = destinations
    .filter((dest) => filter === "All" || dest.category === filter)
    .filter((dest) =>
      dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dest.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="destinations-page">
      <h1>Search</h1>

      {/* Search Bar */}
      <input
        type="text"
        className="search-bar"
        placeholder="Search Destinations..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Category Filters */}
      <div className="filters">
        {["Food", "Nature", "Fun", "History"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={filter === cat ? "active" : ""}
          >
            {cat}
          </button>
        ))}
        <Category currentFilter={filter} setFilter={setFilter} />
      </div>

      <div className="destinations-grid">
        {filteredDestinations.map((destination, index) => (
          <div key={index} className="destination-card">
            <img src={destination.image} alt={destination.name} />
            <div className="destination-content">
              <div className="destination-text">
                <h3>{destination.name}</h3>
                <p>{destination.description}</p>
              </div>
              <button className="see-more-button">See More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destinations;
