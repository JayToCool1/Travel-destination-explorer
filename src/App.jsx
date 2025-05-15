import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home"

function App() {
  return (
     <Router>
      <Header />
      <div style={{ padding: "56px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
       </div> 
     </Router>
  );
}

export default App;