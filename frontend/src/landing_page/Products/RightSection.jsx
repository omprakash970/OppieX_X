function RightSection({ imageURL, productName, productDescription, content }) {
  return (
    <>
      <div className="container mb-5">
        <div className="row align-items-center">
          <div className="col-12 col-md-4 text-start p-3">
            <h5>{productName}</h5>
            <p className="mt-4 mb-4">{productDescription}</p>
            <div className="row">
              <div className="col">
                <p style={{ color: "#387ed1" }}>
                  {content}{" "}
                  <i
                    className="fa fa-long-arrow-right"
                    aria-hidden="true"
                  ></i>{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 text-center">
            <img src={imageURL} alt={productName} className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
}
export default RightSection;
