import React from "react";
function Hero() {
  return (
    <div className="container p-5" mb-5>
      <div className="row text-center">
        <img src="./public/Media/homeHero.png" alt="Hero Image" className="mb-5"></img>
        <h1 className="mt-5 fs-3">
          Invest in OppieX 🤗
        </h1>
        <p className="mt-3">
          OppieX is the trading platform designed to empower you with cutting-edge tools and
          insights for a smarter investment journey.
        </p>
        <button
          className="btn btn-primary fs-5 mt-3 mb-5"
          style={{
            width: "25%",
            margin: "0 auto",
            borderRadius: "8px",
            padding: "5px",
            color: "white",
             backgroundColor:"#2e85ff",
             fontStyle:"bold"
          }}
        >
          Sign up for Free
        </button>
      </div>
    </div>
  );
}
export default Hero;
