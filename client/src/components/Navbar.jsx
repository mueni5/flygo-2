// import { NavLink } from "react-router-dom";
import { HashLink as NavLink } from 'react-router-hash-link';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary mb-3">
        <div className="container-fluid">
          <NavLink className="navbar-brand ms-3" to="#">
            Fly<span className="text-info">GO</span>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  className="nav-link active mx-2 text-info mystyle"
                  aria-current="page"
                  to="#home"
                  style = {{}}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active mx-2 text-info mystyle" to="#about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active mx-2 text-info mystyle"
                  to="#schedule"
                >
                  Schedule
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active mx-2 text-info mystyle"
                  to="#reviews"
                >
                  Reviews
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active mx-2 mystyle" to="/login">
                  <i class="bi bi-person-circle"></i>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
