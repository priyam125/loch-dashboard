import React from "react";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter

import "typeface-inter";

function App() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }} className="App">
      <Router>
        {/* Wrap your component in BrowserRouter */}
        <Dashboard />
      </Router>
    </div>
  );
}

export default App;
