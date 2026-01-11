import React from "react";
function Universe() {
  return (
    <>
      <div className="container mt-5">
        <h3 className="text-center">The OppieX Universe</h3>
        <p className="text-center mt-3">
          Extend your trading and investment experience even further with our partner platforms
        </p>
        <div className="row mt-5 p-3">
          <div className="col-4 text-center">
            <img
              style={{ height: "40px" }}
              src="https://zerodha.com/static/images/partners/zerodhafundhouse.png"
              alt="Universe 1"
            />
            <p style={{ fontSize: "13px" }} className="text-center p-2">
              Our asset management venture that is creating simple and transparent index funds to
              help you save for your goals.
            </p>
          </div>
          <div className="col-4 text-center">
            <img
              style={{ height: "40px" }}
              src="./public/Media/sensibullLogo.svg"
              alt="Universe 1"
            />
            <p style={{ fontSize: "13px" }} className="text-center p-2">
              Options trading platform that lets you create strategies, analyze positions, and
              examine data points like open interest, FII/DII, and more.
            </p>
          </div>
          <div className="col-4 text-center">
            <img
              style={{ height: "40px" }}
              src="https://zerodha.com/static/images/partners/tijori.svg"
              alt="Universe 1"
            />
            <p style={{ fontSize: "13px" }} className="text-center p-2">
              Our asset management venture that is creating simple and transparent index funds to
              help you save for your goals.
            </p>
          </div>
        </div>
        <div className="row  p-3">
          <div className="col-4 text-center">
            <img
              style={{ height: "40px" }}
              src="https://zerodha.com/static/images/products/streak-logo.png"
              alt="Universe 1"
            />
            <p style={{ fontSize: "13px" }} className="text-center p-2">
              Systematic trading platform that allows you to create and backtest strategies without
              coding.
            </p>
          </div>
          <div className="col-4 text-center">
            <img
              style={{ height: "40px" }}
              src="https://zerodha.com/static/images/products/smallcase-logo.png"
              alt="Universe 1"
            />
            <p style={{ fontSize: "13px" }} className="text-center p-2  ">
              Thematic investing platform that helps you invest in diversified baskets of stocks on
              ETFs.
            </p>
          </div>
          <div className="col-4 text-center">
            <img
              style={{ height: "40px" }}
              src="https://zerodha.com/static/images/products/ditto-logo.png"
              alt="Universe 1"
            />
            <p style={{ fontSize: "13px" }} className="text-center p-2">
              Personalized advice on life and health insurance. No spam and no mis-selling. Sign up
              for free
            </p>
          </div>
        </div>
        <button className="text-center btn btn-primary d-block mx-auto mb-5">
            Sign Up for free
        </button>
      </div>
    </>
  );
}
export default Universe;
