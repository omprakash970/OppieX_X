import React from "react";
import Tables from "./tables";

function Reamain() {
  return (
    <>
      <Tables />

      <div className="container my-5">
        <h5 className="text-center mb-4 py-3">
          <span style={{ color: "#387ED1" }}>Calculate your costs upfront</span> using our brokerage
          calculator
        </h5>

        <h5 className="mt-3">Charges for account opening</h5>
        <div className="row">
          <div className="col-12 col-lg-8 mx-auto">
            <table className="table table-bordered table-striped mt-3">
              <caption className="text-muted">Account opening fee structure</caption>
              <thead>
                <tr>
                  <th scope="col">Type of Account</th>
                  <th scope="col">Charges</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Online Account</td>
                  <td>Free</td>
                </tr>
                <tr>
                  <td>Offline Account</td>
                  <td>Free</td>
                </tr>
                <tr>
                  <td>NRI account (offline only)</td>
                  <td>₹ 500</td>
                </tr>
                <tr>
                  <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                  <td>₹ 500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Optional value added services */}
      <div className="container my-4">
        <h5>Charges for optional value added services</h5>
        <div className="row">
          <div className="col-12 col-lg-10 mx-auto">
            <table className="table table-bordered table-striped mt-3">
              <thead>
                <tr>
                  <th scope="col">Service</th>
                  <th scope="col">Billing Frequency</th>
                  <th scope="col">Charges</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tickertape</td>
                  <td>Monthly / Annual</td>
                  <td>Free: 0 | Pro: 249/2399</td>
                </tr>
                <tr>
                  <td>Smallcase</td>
                  <td>Per transaction</td>
                  <td>Buy & Invest More: 100 | SIP: 10</td>
                </tr>
                <tr>
                  <td>Kite Connect</td>
                  <td>Monthly</td>
                  <td>Connect: 500 | Personal: Free</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Charges explained */}
      <div className="container my-5">
        <h5>Charges explained</h5>
        <div className="row gy-4 mt-2">
          <div className="col-12 col-lg-6">
            <h6>Securities/Commodities transaction tax</h6>
            <p className="text-muted">
              Tax by the government when transacting on the exchanges. Charged on both buy and sell
              sides when trading equity delivery. Charged only on selling side when trading intraday
              or on F&O.
            </p>
          </div>
          <div className="col-12 col-lg-6">
            <h6>GST</h6>
            <p className="text-muted">
              18% of (brokerage + SEBI charges + transaction charges) levied by the government on
              services rendered.
            </p>
          </div>
          <div className="col-12 col-lg-6">
            <h6>SEBI Charges</h6>
            <p className="text-muted">
              ₹10 per crore + GST charged by Securities and Exchange Board of India for regulating
              the markets.
            </p>
          </div>
          <div className="col-12 col-lg-6">
            <h6>DP (Depository participant) charges</h6>
            <p className="text-muted">
              Charged on the trading account ledger when stocks are sold, irrespective of quantity.
              Female demat account holders (as first holder) may enjoy a discount on the CDSL fee.
            </p>
          </div>
          <div className="col-12 col-lg-6">
            <h6>Transaction/Turnover Charges</h6>
            <p className="text-muted">
              Charged by exchanges (NSE, BSE, MCX) on the value of your transactions. Rates vary by
              product type and exchange.
            </p>
          </div>
          <div className="col-12 col-lg-6">
            <h6>Stamp Charges</h6>
            <p className="text-muted">
              Applicable on the buy side. Percentage depends on product class; charged as per
              prevailing stamp duty rules.
            </p>
          </div>
        </div>
      </div>

      {/* Additional pricing and service sections */}
      <div className="container my-5">
        <div className="row gy-4">
          {/* Left column */}
          <div className="col-12 col-lg-6">
            <h6>Call & trade</h6>
            <p className="text-muted">
              Orders placed over the phone via dealer assistance may attract a small per-order fee
              including auto square-off charges.
            </p>

            <h6 className="mt-4">Stamp charges</h6>
            <p className="text-muted">
              Collected as per applicable Indian Stamp Act for transactions on stock exchanges and
              depositories.
            </p>

            <h6 className="mt-4">NRI brokerage charges</h6>
            <ul className="text-muted">
              <li>Non-PIS: 0.5% or a fixed per-order fee (higher of the two) for equity/F&O.</li>
              <li>PIS: 0.5% or a fixed per-order fee (higher of the two) for equity.</li>
              <li>AMC: Yearly maintenance by the depository participant may apply.</li>
            </ul>

            <h6 className="mt-4">Account with debit balance</h6>
            <p className="text-muted">
              If the account ledger is negative, orders may incur an additional per-order charge
              instead of the standard brokerage.
            </p>

            <h6 className="mt-4">Investor Protection Fund (IPFT)</h6>
            <ul className="text-muted">
              <li>Equity/Futures: Nominal fee per crore + GST on traded value.</li>
              <li>Options: Fee per crore + GST on premium value.</li>
              <li>Currency: Fee per lakh + GST (varies by product).</li>
            </ul>

            <h6 className="mt-4">Margin Trading Facility (MTF)</h6>
            <ul className="text-muted">
              <li>Interest: Daily rate on funded amount until sale/T+1 release.</li>
              <li>Brokerage: 0.3% or flat per executed order, whichever is lower.</li>
              <li>Pledge: Per scrip charge for pledge/unpledge via ISIN.</li>
            </ul>

            <h6 className="mt-4">Disclaimer</h6>
            <p className="text-muted">
              All statutory and regulatory charges are levied at actuals. Brokerage is charged on
              executed, exercised, and expired contracts as applicable.
            </p>
          </div>

          {/* Right column */}
          <div className="col-12 col-lg-6">
            <h6>AMC (Account maintenance charges)</h6>
            <p className="text-muted">
              BSDA demat: Zero if holding value is below threshold. Non-BSDA demat: Annual fee
              billed quarterly plus GST.
            </p>

            <h6 className="mt-4">Corporate action order charges</h6>
            <p className="text-muted">
              A nominal fee plus GST applies for OFS/buyback/takeover/delisting orders placed via
              console.
            </p>

            <h6 className="mt-4">Off-market transfer charges</h6>
            <p className="text-muted">Per-transaction fee for off-market securities transfers.</p>

            <h6 className="mt-4">Physical CMR request</h6>
            <p className="text-muted">
              First request may be free; subsequent requests billed for courier plus GST.
            </p>

            <h6 className="mt-4">Payment gateway charges</h6>
            <p className="text-muted">
              UPI transfers not levied; other modes may carry a small fee.
            </p>

            <h6 className="mt-4">Delayed payment charges</h6>
            <p className="text-muted">
              Interest may be levied annually or per-day on debit balances in the trading account.
            </p>

            <h6 className="mt-4">3-in-1 account with block functionality</h6>
            <ul className="text-muted">
              <li>Delivery & MTF brokerage: Percentage of executed order value.</li>
              <li>Intraday brokerage: Percentage of executed order value.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reamain;
