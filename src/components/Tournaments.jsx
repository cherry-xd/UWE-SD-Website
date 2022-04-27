import React, { useState, useEffect } from "react";
import { csv } from 'd3';

function useForceUpdate(){
  const [value, setValue] = useState(0);
  return () => setValue(value => value + 1);
}

function Tournaments() {

  const [data, setBracketData] = useState();
  const forceUpdate = useForceUpdate();

  var bracket;
  if(bracket == null) {
    bracket = "TAC1 ROUND 4 MEN";
  }

  var bracketName = "./data/" + bracket + ".csv";
  
  useEffect(() => {
    csv(bracketName).then(data => {
      setBracketData(data);
    });
  }, []);
  console.log(data);

  return (
    <div className="tournaments">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col"/>
          <div class="col-9">
            <h1 class="font-weight-light">Tournaments</h1>
            <button onClick={forceUpdate} class="btn btn-secondary">
              Refresh
            </button>
            <div className="brackets">
            </div>
          </div>
          <div class="col"/>
        </div>
      </div>
    </div>
  );
}

export default Tournaments;