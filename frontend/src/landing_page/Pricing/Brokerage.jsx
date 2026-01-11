function Brokerage() {
  return (
    <>
      <div className="container mt-5 ">
        <div className="row text-center p-6">
          <div className="col-4">
            <img
              style={{ height: "160px" }}
              src="/Media/pricingMF.svg"
              alt="Mutual Funds"
              className="img-fluid"
            />
            <h3>Free equity delivery</h3>
            <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
          </div>
          <div className="col-4">
            <img
              style={{ height: "160px" }}
              src="/Media/intradayTrades.svg"
              alt="Intraday trades"
              className="img-fluid"
            />
            <h3>Intraday and F&O trades</h3>
            <p>
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across
              equity, currency, and commodity trades. Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col-4">
            <img
              style={{ height: "160px" }}
              src="/Media/pricingMF.svg"
              alt="Mutual Funds"
              className="img-fluid"
            />
            <h3>Free direct MF</h3>
            <p>
              All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Brokerage;
