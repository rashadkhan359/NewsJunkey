import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default class NavBar extends Component {
  query = "";
  static defautProps = {
    active: "general",
  };
  static propTypes = {
    active: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      query: "",
    };
  }
  handleQuery() {
    this.setState({ query: this.state.query });
  }
  render() {
    return (
      <>
        <nav
          className={`navbar navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode}`}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              NewsJunkey
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Country
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Categories
                  </a>
                  <ul
                    className={`dropdown-menu bg-${
                      this.props.mode === `light` ? `light` : `dark`
                    }`}
                  >
                    <li>
                      <Link
                        className={`dropdown-item text-${
                          this.props.mode === `light` ? `black` : `white`
                        } ${this.props.active === "business" ? "active" : ""}`}
                        to="/business"
                      >
                        Business
                      </Link>
                    </li>

                    <li>
                      <Link
                        className={`dropdown-item text-${
                          this.props.mode === `light` ? `black` : `white`
                        } ${
                          this.props.active === "entertainment" ? "active" : ""
                        }`}
                        to="/entertainment"
                      >
                        Entertainment
                      </Link>
                    </li>

                    <li>
                      <hr className="dropdown-divider" />
                    </li>

                    <li>
                      <Link
                        className={`dropdown-item text-${
                          this.props.mode === `light` ? `black` : `white`
                        } ${this.props.active === "general" ? "active" : ""}`}
                        to="/general"
                      >
                        General
                      </Link>
                    </li>

                    <li>
                      <Link
                        className={`dropdown-item text-${
                          this.props.mode === `light` ? `black` : `white`
                        } ${this.props.active === "health" ? "active" : ""}`}
                        to="/health"
                      >
                        Health
                      </Link>
                    </li>

                    <li>
                      <Link
                        className={`dropdown-item text-${
                          this.props.mode === `light` ? `black` : `white`
                        } ${this.props.active === "science" ? "active" : ""}`}
                        to="/science"
                      >
                        Science
                      </Link>
                    </li>

                    <li>
                      <Link
                        className={`dropdown-item text-${
                          this.props.mode === `light` ? `black` : `white`
                        } ${this.props.active === "sports" ? "active" : ""}`}
                        to="/sports"
                      >
                        Sports
                      </Link>
                    </li>

                    <li>
                      <Link
                        className={`dropdown-item text-${
                          this.props.mode === `light` ? `black` : `white`
                        } ${
                          this.props.active === "technology" ? "active" : ""
                        }`}
                        to="/technology"
                      >
                        Technology
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={this.props.toggleMode}
                />
              </div>
              <div className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  value={this.state.query}
                  onChange={(e) => this.setState({ query: e.target.value })}
                  style={{
                    backgroundColor:
                      this.props.mode === `dark` ? `black` : `white`,
                    color: this.props.mode === `dark` ? `white` : `#262727`,
                  }}
                />
                <button
                  className="btn btn-outline-success"
                  onClick={() => this.handleQuery()}
                  type="submit"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
