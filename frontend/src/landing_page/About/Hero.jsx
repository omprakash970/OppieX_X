import React from "react";
function Hero() {
  return (
    <>
      <div className="container">
        <div className="row p-5 mb-5 mt-5">
          <h1 className="fs-3 text-center">
            We pioneered the discount broking model in India.
            <br />
            Now, we are breaking ground with our technology.
          </h1>
        </div>
        <div className="row p-5 mt-5 border-top text-muted text-left">
          <div className="col-6 p-5">
            <p>
              We kick-started operations on the 15th of August, 2010 with the goal of breaking all
              barriers that traders and investors face in India in terms of cost, support, and
              technology. We named the company Zerodha, a combination of Zero and "Rodha", the
              Sanskrit word for barrier.
            </p>
            <p>
              Today, our disruptive pricing models and in-house technology have made us the biggest
              stock broker in India.
            </p>
            <p>
              Over 1.6+ crore clients place billions of orders every year through our powerful
              ecosystem of investment platforms, contributing over 15% of all Indian retail trading
              volumes.
            </p>
          </div>
          <div className="col-6 p-5">
            <p>
              In addition, we run a number of popular open online educational and community
              initiatives to empower retail traders and investors.
            </p>
            <p>
              <span style={{ color: "#387EDA" }}>Rainmatter</span>, our fintech fund and incubator,
              has invested in several fintech startups with the goal of growing the Indian capital
              markets.
            </p>
            <p>
              And yet, we are always up to something new every day. Catch up on the latest updates
              on our <span style={{ color: "#387EDA" }}>blog</span> or see what the media is saying
              about us or learn more about our business and product{" "}
              <span style={{ color: "#387EDA" }}>philosophies</span>.
            </p>
          </div>
        </div>
        <div className="row p-5 mt-5 border-top text-muted text-left">
          <h4 className="text-center">People</h4>
          <div className="col-6 p-5 text-center">
            <img
              style={{ borderRadius: "50%", height: "320px" }}
              src="https://lh3.googleusercontent.com/a/ACg8ocLmcO8STidH32Sm5gHa5207BFqPjrE3ar4Ywj_Hd4OA6ZGzYxR8=s360-c-no"
              alt="Hero Image"
              className="  imag-center img-fluid mb-3 mb-md-4"
            />
            <h3 className="text-center ">Oppie 😎</h3>
            <p className="text-center mt-3 ">Founder & CEO</p>
          </div>
          <div style={{ fontSize: "11px" }} className="col-6 p-5">
            <p>
              Oppie bootstrapped and founded OppieX in 2010 to overcome the hurdles he faced during
              his decade long stint as a trader. Today, Zerodha has changed the landscape of the
              Indian broking industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market
              Data Advisory Committee (MDAC).
            </p>
            <p>Playing Cricket is his zen.</p>
            <p>
              Connect on <span style={{ color: "#387EDA" }}>Homepage</span> /{" "}
              <span style={{ color: "#387EDA" }}>TradingQnA</span> /
              <span style={{ color: "#387EDA" }}>Twitter</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero;
