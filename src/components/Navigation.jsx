import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Tennis Tournament Site
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/players">
                  Players
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/bracket">
                  Bracket
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/prizes">
                  Prizes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/ratings">
                  Ratings
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;