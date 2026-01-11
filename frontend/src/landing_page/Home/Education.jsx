import React from "react";
function Education() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img src="./public/Media/education.svg" alt="Education Image" className="mb-5"></img>
          </div>
          <div className="col-6">
            <h1 className="fs-2 mt-5">Free and Open market education</h1>
            <p className="mt-5">
              Varsity, the largest online stock market education book in the world covering
              everything from the basics to advanced trading.
            </p>
            <a style={{ textDecoration: "none" }} href="">
              Varsity
              <i
                className="fa fa-long-arrow-right"
                aria-hidden="true"
                style={{ marginLeft: "4px" }}
              ></i>
            </a>
            <p className="mt-5">
             TradingQ&A, the most active trading and investment community in India for all your market related queries.
            </p>
            <a style={{ textDecoration: "none" }} href="">
              TradingQ&A 
              <i
                className="fa fa-long-arrow-right"
                aria-hidden="true"
                style={{ marginLeft: "4px" }}
              ></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Education;
