import React from "react";
function Stats() {
  return (
    <div className="container">
      <div className="row py-4 py-md-5">
        <div className="col-12 col-md-6 px-3 px-md-5">
          <h1 className="fs-2 mb-5">Trust With Confidence</h1>
          <h3 className="fs-3 mb-3">Customer-first always</h3>
          <p className="text-muted">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity
            investments, making us India’s largest broker; contributing to 15% of daily retail
            exchange volumes in India.
          </p>
          <h3 className="fs-3 mb-3">No spam or gimmicks</h3>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications. High quality apps
            that you use at your pace, the way you like. Our philosophies.
          </p>
          <h3 className="fs-3 mb-3">The Zerodha universe</h3>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer
            you tailored services specific to your needs.
          </p>
          <h3 className="fs-3 mb-3">Do better with money</h3>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but
            actively help you do better with your money.
          </p>
        </div>
        <div className="col-12 col-md-6">
          <img src="/Media/ecosystem.png" alt="Stats Image" className="img-fluid mb-3 mb-md-4" />

          <div className="text-center">
            <a style={{ textDecoration: "none" }} href="" className="mx-3 mx-md-5">
              Explore our products{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>{" "}
            </a>

            <a style={{ textDecoration: "none" }} href="" className="mx-3 mx-md-0">
              Try Kite demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Stats;
