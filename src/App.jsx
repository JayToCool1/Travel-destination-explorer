import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <Router>
      <div style={{ paddingTop: "56px" }}>
        <Favorites />
      </div>
    </Router>
  );
}

export default App;
