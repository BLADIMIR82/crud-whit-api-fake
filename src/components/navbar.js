import React from "react";
import { Link as LinkRouter } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-success">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <LinkRouter className="nav-link active text-light" to="*">
            
            Home
            </LinkRouter>
          </li>
          <li className="nav-item">
          <LinkRouter className="nav-link active text-light" to="read">
             Listado
                </LinkRouter>
          </li>
        </ul>
      </div>
    </nav>
  );
}
