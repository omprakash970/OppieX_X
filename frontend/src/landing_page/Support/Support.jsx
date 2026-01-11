import React from "react";
import Hero from "./Hero";
import Footer from "../Footer";

function Support() {
  return (
    <>
      <Hero />
      <div className="container my-4">
        <div className="row g-4">
          <div className="col-12 col-lg-8">
            <div className="accordion" id="supportAccordion">
              {[
                { title: "Account Opening", id: "accOpening" },
                { title: "Your Zerodha Account", id: "yourAccount" },
                { title: "Kite", id: "kite" },
                { title: "Funds", id: "funds" },
                { title: "Console", id: "console" },
                { title: "Coin", id: "coin" },
              ].map((item, idx) => (
                <div className="accordion-item" key={item.id}>
                  <h2 className="accordion-header" id={`heading-${item.id}`}>
                    <button
                      className={"accordion-button" + (idx === 0 ? "" : " collapsed")}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse-${item.id}`}
                      aria-expanded={idx === 0 ? "true" : "false"}
                      aria-controls={`collapse-${item.id}`}
                    >
                      {item.title}
                    </button>
                  </h2>
                  <div
                    id={`collapse-${item.id}`}
                    className={"accordion-collapse collapse" + (idx === 0 ? " show" : "")}
                    aria-labelledby={`heading-${item.id}`}
                    data-bs-parent="#supportAccordion"
                  >
                    <div className="accordion-body">
                      <ul className="mb-0">
                        <li>
                          <a href="#">Getting started</a>
                        </li>
                        <li>
                          <a href="#">Common questions</a>
                        </li>
                        <li>
                          <a href="#">Troubleshooting</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div
              className="mb-4 p-3 rounded"
              style={{ backgroundColor: "#FFF4E5", borderLeft: "8px solid #FF9100" }}
            >
              <ul className="mb-0">
                <li>
                  <a href="#">Offer for sale (OFS) – January 2026</a>
                </li>
                <li>
                  <a href="#">Rights Entitlements listing in January 2026</a>
                </li>
              </ul>
            </div>
            <div className="card">
              <div className="card-header bg-light">Quick links</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <a href="#">1. Track account opening</a>
                </li>
                <li className="list-group-item">
                  <a href="#">2. Track segment activation</a>
                </li>
                <li className="list-group-item">
                  <a href="#">3. Intraday margins</a>
                </li>
                <li className="list-group-item">
                  <a href="#">4. Kite user manual</a>
                </li>
                <li className="list-group-item">
                  <a href="#">5. Learn how to create a ticket</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Support;
