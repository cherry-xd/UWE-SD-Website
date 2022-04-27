import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Home,
  Players,
  MalePlayers,
  FemalePlayers,
  Contact,
  Prizes,
  Ratings,
  Tournaments,
} from "./components";

// this handles the routes, this does not affect the navigation bar
// though as that is in the Navigation.jsx component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/players" element={<Players />} />
      <Route path="/players/male" element={<MalePlayers />} />
      <Route path="/players/female" element={<FemalePlayers />} />
      <Route path="/tournaments" element={<Tournaments />} />
      <Route path="/prizes" element={<Prizes />} />
      <Route path="/ratings" element={<Ratings />} />
      <Route path="/contact" element={<Contact />}>
      </Route>
    </Routes>
  </Router>,

  document.getElementById("root")
);