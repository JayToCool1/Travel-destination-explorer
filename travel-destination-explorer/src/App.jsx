import React, { useState } from "react";
import CategoryFilter from "./components/CategoryFilter";

function App() {
  const [filter, setFilter] = useState("All");

  return (
    <div style={{ padding: "40px" }}>
      <CategoryFilter currentFilter={filter} setFilter={setFilter} />
      <p>Selected: {filter}</p>
    </div>
  );
}

export default App;