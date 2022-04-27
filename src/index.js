import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Home,
  Players,
  Contact,
  Prizes,
  Ratings,
  Bracket,
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/players" element={<Players />} />
      <Route path="/bracket" element={<Bracket />} />
      <Route path="/prizes" element={<Prizes />} />
      <Route path="/ratings" element={<Ratings />} />
      <Route path="/contact" element={<Contact />}>
      </Route>
    </Routes>
  </Router>,

  document.getElementById("root")
);