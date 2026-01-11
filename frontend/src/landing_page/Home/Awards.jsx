function Awards() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <img src="/Media/largestBroker.svg" alt="Awards Image" className="img-fluid" />
        </div>

        <div className="col-12 col-md-6 pt-3 pt-md-5 mt-md-3">
          <h1 className="mb-3">Largest Stock Broker in India</h1>
          <p>
            OppieX is recognized as the largest stock broker in India, providing unparalleled
            trading services to millions of users.
          </p>

          <div className="row">
            <div className="col-12 col-sm-6 pt-2 pt-md-4">
              <ul className="mb-0">
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>

            <div className="col-12 col-sm-6 pt-2 pt-md-4">
              <ul className="mb-0">
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct Mutual Funds</p>
                </li>
                <li>
                  <p>Bonds and Government Security</p>
                </li>
              </ul>
            </div>
          </div>

          <img src="/Media/pressLogos.png" alt="Awards Badges" className="mt-3 img-fluid" />
        </div>
      </div>
    </div>
  );
}
export default Awards;
