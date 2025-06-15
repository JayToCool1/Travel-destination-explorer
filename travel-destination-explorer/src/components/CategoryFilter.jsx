import React from "react";
import "./CategoryFilter.css";

function CategoryFilter({ currentFilter, setFilter }) {
    const categories = ["All", "Food", "Nature", "History", "Fun"];

    return (
        <div className="filters">
            {categories.map((cat) => (
                <button 
                  key={cat}
                  className={currentFilter === cat ? "active" : ""}
                  onClick={() => setFilter(cat)}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
}

export default CategoryFilter;