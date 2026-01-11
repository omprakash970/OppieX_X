function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg border-bottom bg-white ">
        <div className="container">
          
          {/* Logo */}
          <a className="navbar-brand" href="#">
            <img
              src="/Media/Gemini_Generated_Image_5b2zim5b2zim5b2z-removebg-preview.png"
              alt="OppieX Logo"
              style={{ height: "35px" }}
            />
          </a>

          {/* Mobile toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto align-items-center gap-3">
              <li className="nav-item">
                <a className="nav-link" href="#">Signup</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Support</a>
              </li>
              <li className="nav-item">
                <i class="fa fa-list-ul" aria-hidden="true"></i>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </>
  );
}

export default NavBar;
