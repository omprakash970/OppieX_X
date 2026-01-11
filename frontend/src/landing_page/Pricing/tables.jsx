import React, { useState } from "react";
import "./Tables.css";

function Tables() {
  const [activeTab, setActiveTab] = useState("equity");

  return (
    <>
      <div style={{ marginLeft: "120px" }} className="tabs mt-3">
        <span
          className={activeTab === "equity" ? "active" : ""}
          onClick={() => setActiveTab("equity")}
        >
          Equity
        </span>
        <span
          className={activeTab === "currency" ? "active" : ""}
          onClick={() => setActiveTab("currency")}
        >
          Currency
        </span>
        <span
          className={activeTab === "commodity" ? "active" : ""}
          onClick={() => setActiveTab("commodity")}
        >
          Commodity
        </span>
      </div>

      <div className="page-container">
        <div className="table-card">
          {activeTab === "equity" && <Equity />}
          {activeTab === "currency" && <Currency />}
          {activeTab === "commodity" && <Commodity />}
        </div>
      </div>
    </>
  );
}

function Currency() {
  return (
    <>
      <table className="zerodha-table">
        <thead>
          <tr>
            <th></th>
            <th>Currency features</th>
            <th>Currency Options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Brokerage</td>
            <td>0.03% or ₹ 20/executed order whichever is lower</td>
            <td>₹ 20/executed order</td>
          </tr>
          <tr>
            <td>STT/CTT</td>
            <td>No STT</td>
            <td>No STT</td>
          </tr>
          <tr>
            <td>Transaction charges</td>
            <td>NSE: 0.00035% BSE: 0.00045%</td>
            <td>NSE: 0.0311% BSE: 0.001%</td>
          </tr>
          <tr>
            <td>GST</td>
            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
          </tr>
          <tr>
            <td>SEBI charges</td>
            <td>₹10 / crore</td>
            <td>₹10 / crore</td>
          </tr>
          <tr>
            <td>Stamp charges</td>
            <td>0.0001% or ₹10 / crore on buy side</td>
            <td>0.0001% or ₹10 / crore on buy side</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

/* ---------------- EQUITY TABLE ---------------- */

function Equity() {
  return (
    <table className="zerodha-table">
      <thead>
        <tr>
          <th></th>
          <th>Equity delivery</th>
          <th>Equity intraday</th>
          <th>F&O - Futures</th>
          <th>F&O - Options</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Brokerage</td>
          <td>Zero Brokerage</td>
          <td>0.03% or Rs. 20/executed order whichever is lower</td>
          <td>0.03% or Rs. 20/executed order whichever is lower</td>
          <td>Flat Rs. 20 per executed order</td>
        </tr>

        <tr>
          <td>STT/CTT</td>
          <td>0.1% on buy & sell</td>
          <td>0.025% on the sell side</td>
          <td>0.02% on the sell side</td>
          <td>
            <ul>
              <li>0.125% of intrinsic value (exercised)</li>
              <li>0.1% on sell side (premium)</li>
            </ul>
          </td>
        </tr>

        <tr>
          <td>Transaction charges</td>
          <td>
            NSE: 0.00297%
            <br />
            BSE: 0.00375%
          </td>
          <td>
            NSE: 0.00297%
            <br />
            BSE: 0.00375%
          </td>
          <td>
            NSE: 0.00173%
            <br />
            BSE: 0
          </td>
          <td>
            NSE: 0.03503%
            <br />
            BSE: 0.0325%
          </td>
        </tr>

        <tr>
          <td>GST</td>
          <td colSpan="4">18% on (brokerage + SEBI charges + transaction charges)</td>
        </tr>

        <tr>
          <td>SEBI charges</td>
          <td colSpan="4">₹10 / crore</td>
        </tr>

        <tr>
          <td>Stamp charges</td>
          <td>0.015% or ₹1500 / crore on buy side</td>
          <td>0.003% or ₹300 / crore on buy side</td>
          <td>0.002% or ₹200 / crore on buy side</td>
          <td>0.003% or ₹300 / crore on buy side</td>
        </tr>
      </tbody>
    </table>
  );
}

function Commodity() {
  return (
    <>
      <table className="zerodha-table">
        <thead>
          <tr>
            <th></th>
            <th>Commodity futures</th>
            <th>Commodity options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Brokerage</td>
            <td>0.03% or Rs. 20/executed order whichever is lower</td>
            <td>₹ 20/executed order</td>
          </tr>
          <tr>
            <td>STT/CTT</td>
            <td>0.01% on sell side (Non-Agri)</td>
            <td>0.05% on sell side</td>
          </tr>
          <tr>
            <td>Transaction charges</td>
            <td>MCX: 0.0021% NSE: 0.0001%</td>
            <td>MCX: 0.0418% NSE: 0.001%</td>
          </tr>
          <tr>
            <td>GST</td>
            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
          </tr>
          <tr>
            <td>SEBI charges</td>
            <td>Agri: ₹1 / crore Non-agri: ₹10 / crore</td>
            <td>₹10 / crore</td>
          </tr>
          <tr>
            <td>Stamp charges</td>
            <td>0.002% or ₹200 / crore on buy side</td>
            <td>0.003% or ₹300 / crore on buy side</td>
          </tr>
        </tbody>
      </table>
     
    </>
    
  );
}


export default Tables;
