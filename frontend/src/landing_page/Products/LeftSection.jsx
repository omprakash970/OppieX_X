import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,

  googlePlay,
appStore,
}) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8 text-center">
            <img src={imageURL}></img>
          </div>
          <div className="col-4 text-left p-3">
            <h5>{productName}</h5>
            <p>
              {productDescription}
              
            </p>
            <div className="row">
              <div className="col">
                 <p style={{ color: "#387ed1" }}>
                  Try demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>{" "}
                </p>

              </div>
              <div className="col">
                 <p style={{ color: "#387ed1" }}>
                  Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i>{" "}
                </p>

              </div>
            </div>
            <div className="row tp-2">
              <div className="col">
                <a href={googlePlay}>
                <img src="./public/Media/googlePlayBadge.svg"></img>
                </a>
              </div>
              <div className="col">
                <a href={appStore}>
                <img src="./public/Media/appstoreBadge.svg"></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default LeftSection;
