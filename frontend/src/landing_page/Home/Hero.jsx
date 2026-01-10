import React from "react";
function Hero() {
    return (
      <div className="container p-5">
        <div className="row text-center">
           <img src="./public/Media/homeHero.png" alt="Hero Image" className="mb-5" ></img>
           <h1 className="mt-5" >
            Welcome to OppieX - Your Gateway to Seamless Trading, Owned by your Oppie 🤗!
           </h1>
           <p>Mine&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;
Zerodha 😇</p>
            <button className="btn btn-primary fs-5 mt-3" style={
                {width: "25%", margin:"0 auto", borderRadius: "15px", padding:"5px", color:"white"}
              }>
                SignUp
            </button>
        </div>
      </div>
    );
}
export default Hero;