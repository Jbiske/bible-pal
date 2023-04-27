// imports
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/Homepage";

import './App.css';



function App() {
  return (
    // Routes 
    <Router>
      <Navbar />
      <Route path="/" exact element={<HomePage></HomePage>} />
      
    </Router>
  );
}

export default App;






