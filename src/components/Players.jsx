import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Players() {
  return (
    <div className="players">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col"/>
          <div class="col-9">
            <h1 class="font-weight-light text-center">Players</h1>
          </div>
          <div class="col"/>
        </div>
        <div class="row align-items-center my-5">
          <div class="col"/>
          <div class="col-5 text-center">
            <NavLink to="/players/male">
              <button class="btn btn-secondary">
                <h2 class="font-weight-light">Male Players</h2>
              </button>
            </NavLink>
          </div>
          <div class="col-5 text-center">
            <NavLink to="/players/female">
              <button class="btn btn-secondary">
                <h2 class="font-weight-light">Female Players</h2>
              </button>
            </NavLink>
          </div>
          <div class="col"/>
        </div>
      </div>
    </div>
  );
}

export default Players;