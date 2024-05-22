import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { Link } from "react-router-dom";


const Navbar = () => {
  const navBarStyle = {
    backgroundColor: "#E3FFC6",
    font: "pacifico",
  };
  
  return (
    
      
      <nav className="navbar navbar-expand-lg sticky-top" style={navBarStyle}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="public/logo.png"
              alt="Logo"
              width="30"
              height="30"
              className="d-inline-block align-text-top"
            />
            Heart Rate Sensor
          </Link>
        </div>

        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/UserDashBoard"
                >
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Relax"
                >
                  Relax
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/SignIn">
                  <img src="public/userLogo.svg" alt="user image" />
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link active dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About Us
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/Developer">
                      Developers
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Contact">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Comparison">
                      Comparision Report
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
  );
};

export default Navbar;
