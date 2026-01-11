import React from "react";

function Footer() {
  return (
    <>
      {/* full-width background wrapper */}
      <div
        style={{
          backgroundColor: "whitesmoke",
          marginTop: "50px",
          width: "100%",
          position:"fixed"
        }}
      >
        {/* centered content */}
        <div className="container" style={{ padding: "30px" }}>
          <div className="row">
            <div className="col-12 col-md-4 col-lg-4">
              <img
                src="/Media/Gemini_Generated_Image_5b2zim5b2zim5b2z-removebg-preview.png"
                alt="OppieX Logo"
                className="mb-3 img-fluid border-bottom "
                style={{ height: "40px" }}
              />
              {/* Social icons */}
              <div className="d-flex align-items-center gap-3 mt-2">
                <a href="#" aria-label="X / Twitter" title="Twitter">
                  <i className="fa fa-twitter fs-4" aria-hidden="true"></i>
                </a>
                <a href="#" aria-label="Facebook" title="Facebook">
                  <i className="fa fa-facebook fs-4" aria-hidden="true"></i>
                </a>
                <a href="#" aria-label="Instagram" title="Instagram">
                  <i className="fa fa-instagram fs-4" aria-hidden="true"></i>
                </a>
                <a href="#" aria-label="LinkedIn" title="LinkedIn">
                  <i className="fa fa-linkedin fs-4" aria-hidden="true"></i>
                </a>
              </div>
              <div className="d-flex align-items-center gap-3 mt-3">
                <a href="#" aria-label="YouTube" title="YouTube">
                  <i className="fa fa-youtube-play fs-4" aria-hidden="true"></i>
                </a>
                <a href="#" aria-label="WhatsApp" title="WhatsApp">
                  <i className="fa fa-whatsapp fs-4" aria-hidden="true"></i>
                </a>
                <a href="#" aria-label="Telegram" title="Telegram">
                  <i className="fa fa-telegram fs-4" aria-hidden="true"></i>
                </a>
              </div>
              <p className="mt-2" style={{ fontSize: "10px" }}>
                © 2010 - 2025, Zerodha Broking Ltd. All rights reserved.
              </p>
            </div>

            <div className="col-12 col-md-4 col-lg-2">
              <p>Account</p>
              <ul
                style={{
                  listStyleType: "none",
                  paddingLeft: 0,
                  paddingTop: "10px",
                  fontSize: "12px",
                }}
              >
                <li className="mb-2" style={{ padding: "2px", color: " #666" }}>
                  <a href="#">Open demat account</a>
                </li>
                <li className="mb-2" style={{ padding: "2px", color: " #666" }}>
                  <a href="#">Minor demat account</a>
                </li>
                <li className="mb-2" style={{ padding: "2px", color: " #666" }}>
                  <a href="#">NRI demat account</a>
                </li>
                <li className="mb-2" style={{ padding: "2px", color: " #666" }}>
                  <a href="#">Commodity</a>
                </li>
                <li className="mb-2" style={{ padding: "2px", color: " #666" }}>
                  <a href="#">Dematerialisation</a>
                </li>
                <li className="mb-2" style={{ padding: "2px", color: " #666" }}>
                  <a href="#">Fund transfer</a>
                </li>
                <li className="mb-2" style={{ padding: "2px", color: " #666" }}>
                  <a href="#">MTF</a>
                </li>
                <li className="mb-2" style={{ padding: "2px", color: " #666" }}>
                  <a href="#">Referral program</a>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-4 col-lg-2">
              <p>Support</p>
              <ul
                style={{
                  listStyleType: "none",
                  paddingLeft: 0,
                  paddingTop: "10px",
                  fontSize: "12px",
                }}
              >
                <li className="mb-2" style={{ padding: "2px", color: " #666" }}>
                  <a href="#">Contact us</a>
                </li>
                <li className="mb-2" style={{ padding: "2px", color: " #666" }}>
                  <a href="#">Support portal</a>
                </li>
                <li className="mb-2" style={{ padding: "2px", color: " #666" }}>
                  <a href="#">How to file a complaint?</a>
                </li>
                <li className="mb-2" style={{ padding: "2px", color: " #666" }}>
                  <a href="#">Status of your complaints</a>
                </li>
                <li className="mb-2" style={{ padding: "2px", color: " #666" }}>
                  <a href="#">Bulletin</a>
                </li>
                <li className="mb-2" style={{ padding: "2px", color: " #666" }}>
                  <a href="#">Circular</a>
                </li>
                <li className="mb-2" style={{ padding: "2px", color: " #666" }}>
                  <a href="#">Z-Connect blog</a>
                </li>
                <li className="mb-2" style={{ padding: "2px", color: " #666" }}>
                  <a href="#">Downloads</a>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-4 col-lg-2">
              <p>Company</p>
              <ul
                style={{
                  listStyleType: "none",
                  paddingLeft: 0,
                  paddingTop: "10px",
                  fontSize: "12px",
                }}
              >
                <li className="mb-2" style={{ padding: "2px", color: " #666" }}>
                  <a href="#">About</a>
                </li>
                <li className="mb-2" style={{ padding: "2px", color: " #666" }}>
                  <a href="#">Philosophy</a>
                </li>
                <li className="mb-2" style={{ padding: "2px", color: " #666" }}>
                  <a href="#">Press & media</a>
                </li>
                <li className="mb-2" style={{ padding: "2px", color: " #666" }}>
                  <a href="#">Careers</a>
                </li>
                <li className="mb-2" style={{ padding: "2px", color: " #666" }}>
                  <a href="#">Zerodha Cares (CSR)</a>
                </li>
                <li className="mb-2" style={{ padding: "2px", color: " #666" }}>
                  <a href="#">Zerodha.tech</a>
                </li>
                <li className="mb-2" style={{ padding: "2px", color: " #666" }}>
                  <a href="#">Open source</a>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-4 col-lg-2">
              <p>Quick Links</p>
              <ul
                style={{
                  listStyleType: "none",
                  paddingLeft: 0,
                  paddingTop: "10px",
                  fontSize: "12px",
                }}
              >
                <li className="mb-2" style={{ padding: "2px", color: " #666" }}>
                  <a href="#">Upcoming IPOs</a>
                </li>
                <li className="mb-2" style={{ padding: "2px", color: " #666" }}>
                  <a href="#">Brokerage charges</a>
                </li>
                <li className="mb-2" style={{ padding: "2px", color: " #666" }}>
                  <a href="#">Market holidays</a>
                </li>
                <li className="mb-2" style={{ padding: "2px", color: " #666" }}>
                  <a href="#">Economic calendar</a>
                </li>
                <li className="mb-2" style={{ padding: "2px", color: " #666" }}>
                  <a href="#">Calculators</a>
                </li>
                <li className="mb-2" style={{ padding: "2px", color: " #666" }}>
                  <a href="#">Markets</a>
                </li>
                <li className="mb-2" style={{ padding: "2px", color: " #666" }}>
                  <a href="#">Sectors</a>
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-5" style={{ fontSize: "10px", color: "#9b9b9b" }}>
            Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633
            CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.:
            IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars
            Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully
            read the Risk Disclosure Document as prescribed by SEBI | ICF
          </p>
          <p className="mt-2" style={{ fontSize: "10px", color: "#9b9b9b" }}>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory
            details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID.
            Benefits: Effective Communication, Speedy redressal of the grievances
          </p>
          <p className="mt-2" style={{ fontSize: "10px", color: "#9b9b9b" }}>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>

          <p className="mt-2" style={{ fontSize: "10px", color: "#9b9b9b" }}>
            Investments in securities market are subject to market risks; read all the related
            documents carefully before investing.
          </p>

          <p className="mt-2" style={{ fontSize: "10px", color: "#9b9b9b" }}>
            Attention investors: 1) Stock brokers can accept securities as margins from clients only
            by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your
            e-mail and phone number with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to create pledge. 3) Check
            your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL
            every month.
          </p>
          <p className="mt-2" style={{ fontSize: "10px", color: "#9b9b9b" }}>
            India's largest broker based on petworth as per NSE. NSE broker factsheet
          </p>

          <p className="mt-2" style={{ fontSize: "10px", color: "#9b9b9b" }}>
            Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs
            with your stock brokers. Receive information of your transactions directly from Exchange
            on your mobile/email at the end of the day. Issued in the interest of investors. KYC is
            one time exercise while dealing in securities markets - once KYC is done through a SEBI
            registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear Investor, if you are
            subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account
            number and sign the IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your bank account. As a
            business we don't give stock tips, and have not authorized anyone to trade on behalf of
            others. If you find anyone claiming to be part of Zerodha and offering such services,
            please create a ticket here.
          </p>

          <p className="mt-2" style={{ fontSize: "10px", color: "#9b9b9b" }}>
            *Customers availing insurance advisory services offered by Ditto (Tacterial Consulting
            Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will
            not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or
            arbitration mechanism for such products.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
