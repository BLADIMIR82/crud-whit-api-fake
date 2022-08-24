import React from "react";
import { Link as LinkRouter } from "react-router-dom";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-success">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <LinkRouter className="nav-link active text-light" aria-current="page" to="*">
                Home
              </LinkRouter>
            </li>
            <li class="nav-item">
              <LinkRouter className="nav-link active text-light" aria-current="page" to="read">
                CRUD
              </LinkRouter>
            </li>
            <li class="nav-item">
              <LinkRouter className="nav-link active text-light" aria-current="page" to="pagination">
             APIREST
              </LinkRouter>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
