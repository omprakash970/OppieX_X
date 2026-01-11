function Hero() {
  return (
    <>
      <section style={{ backgroundColor: "#F6F6F6", width: "100%" }}>
        <div className="container py-5">
          <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
            <div>
              <h1 className="mb-2">Support Portal</h1>
              <p className="text-muted mb-0">Find answers, create tickets, and reach our team.</p>
            </div>
            <div>
              <a href="#" className="btn btn-primary">
                My tickets
              </a>
            </div>
          </div>

          <div className="mt-4">
            <div className="input-group">
              <span className="input-group-text bg-white">
                <i className="fa fa-search" aria-hidden="true"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Eg: How do I open my account, How do I activate F&O..."
                aria-label="Search support"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
