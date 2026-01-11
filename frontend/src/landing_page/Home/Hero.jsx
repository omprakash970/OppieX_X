import React from "react";
function Hero() {
  return (
    <div className="container py-4 py-md-5 mb-5">
      <div className="row text-center">
        <img src="/Media/homeHero.png" alt="Hero Image" className="mb-4 img-fluid" />
        <h1 className="mt-2 fs-3">Invest in OppieX 🤗</h1>
        <p className="mt-3">
          OppieX is the trading platform designed to empower you with cutting-edge tools and
          insights for a smarter investment journey.
        </p>
        <button
          className="btn btn-primary fs-5 mt-3 mb-4 d-block mx-auto"
          style={{
            borderRadius: "8px",
            padding: "8px 12px",
            color: "white",
            backgroundColor: "#2e85ff",
            maxWidth: "320px",
            width: "100%",
          }}
        >
          Sign up for Free
        </button>
      </div>
    </div>
  );
}
export default Hero;
