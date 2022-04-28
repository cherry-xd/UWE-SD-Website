import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col"/>
          <div class="col-9">
            <h1 class="font-weight-light text-center">Welcome to the A7 Tennis Tournament Info Site!</h1>
            <br/>
            <h1 class="font-weight-light text-center">Recently Completed Tournaments:</h1>
          </div>
          <div class="col"/>
        </div>
        <div class="row align-items-center my-5">
          <div class="col"/>
          <div class="col text-center">
            <h3>
              TAC1
            </h3>
            <p>
              Mens Winner: MP14<br/>
              Womens Winner: FP07
            </p>
            <h3>
              TAE21
            </h3>
            <p>
              Mens Winner: MP07<br/>
              Womens Winner: FP03
            </p>
          </div>
          <div class="col text-center">
            <h3>
              TAW11
            </h3>
            <p>
              Mens Winner: MP25<br/>
              Womens Winner: FP19
            </p>
            <h3>
              TBS2
            </h3>
            <p>
              Mens Winner: MP15<br/>
              Womens Winner: FP21
            </p>
          </div>
          <div class="col"/>
        </div>
        <div class="row align-items-center my-5">
          <div class="col"/>
          <div class="col-9">
            <h1 class="font-weight-light text-center">Upcoming Tournaments:</h1>
          </div>
          <div class="col"/>
        </div>
        <div class="row align-items-center my-5">
          <div class="col text-center">
            <h3>
              TOT5
            </h3>
            <br/>
            <h3>
              TWF1
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;