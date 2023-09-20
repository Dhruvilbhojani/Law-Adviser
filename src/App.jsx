import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SearchLawyer from "./pages/SearchLawyer";
import LawyerProfile from "./pages/LawyerProfile";
import LawAdvice from "./pages/LawAdvice";
import Questions from "./pages/Questions";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search-lawyer" element={<SearchLawyer />} />
          <Route path="/lawyer-profile" element={<LawyerProfile />} />
          <Route path="/law-advice" element={<LawAdvice />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
