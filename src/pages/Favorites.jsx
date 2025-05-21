import React, { useEffect, useState } from "react";
import "./Favorites.css";

function Favorites() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        // Pull from localStorage // 
        const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(savedFavorites);
     }, []);

     return (
      <div className="favorites-page">
        <div className="favorites-wrapper">
          <h1>❤️ Your Saved Destinations</h1>
  
          {favorites.length === 0 ? (
            <p>You haven't saved anything yet.</p>
          ) : (
            <div className="favorites-grid">
              {favorites.map((destination, index) => (
                <div key={index} className="favorite-card">
                  <img src={destination.image} alt={destination.name} />
                  <h3>{destination.name}</h3>
                  <p>{destination.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
  
  export default Favorites;
  