import React from "react";
import { useNavigate } from "react-router-dom";
import "../../Css/"

const Header = () => {
  const username = sessionStorage.getItem("Username");
  const password = sessionStorage.getItem("Password");
  const navigate = useNavigate();
  const logout = () => {
    const userName = sessionStorage.removeItem("Username");
    const password = sessionStorage.removeItem("Password");
    navigate("/");
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="">
            Employee Management Portal
          </a>

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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>

              {username && password && (
                <>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      aria-current="page"
                      href="AddEmployee"
                    >
                      Add Employee
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/View">
                      View Employee
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/logout" onClick={logout}>
                      LogOut
                    </a>
                  </li>
                </>
              )}
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login{" "}
                </a>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
