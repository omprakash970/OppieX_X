function Awards() {
    return (
        <div className="container mt-5">
            <div className="row align-items-start">
                <div className="col-6">
                    <img src="./public/Media/largestBroker.svg" alt="Awards Image" className="mb-5 img-fluid" />
                </div>

                <div className="col-6 p-5 mt-5">
                    <h1>Largest Stock Broker in India</h1>
                    <p>
                        OppieX is recognized as the largest stock broker in India, providing unparalleled trading services to millions of users.
                    </p>

                    <div className="row">
                        <div className="col-6 p-5 ">
                            <ul>
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

                        <div className="col-6 p-5">
                            <ul>
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

                    <img style={{width:"80%"}} src="./public/Media/pressLogos.png" alt="Awards Badges" className="mt-1 img-fluid" />
                </div>
            </div>
        </div>
    );
}
export default Awards;