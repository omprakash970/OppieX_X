import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg border-bottom bg-white ">
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img
              src="/Media/Gemini_Generated_Image_5b2zim5b2zim5b2z-removebg-preview.png"
              alt="OppieX Logo"
              style={{ height: "35px" }}
            />
          </Link>

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
                <Link className="nav-link" to="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/support">
                  Support
                </Link>
              </li>
              <li className="nav-item">
                <i className="fa fa-bars" aria-hidden="true"></i>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
