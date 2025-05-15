import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
     <Router>
      <Header />
       {/* Nothing else, just header preview */}
     </Router>
  );
}

export default App;