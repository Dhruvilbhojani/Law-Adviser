import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SearchLawyer from "./pages/SearchLawyer";
import LawyerProfile from "./pages/LawyerProfile";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search-lawyer" element={<SearchLawyer />} />
          <Route path="/lawyer-profile" element={<LawyerProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
