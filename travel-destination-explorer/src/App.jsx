import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Destinations from "./pages/destinations";

function App() {
  return (
    <Router>
      <div style={{ paddingTop: "56px" }}>
        <Destinations />
      </div>
    </Router>
  );
}

export default App;