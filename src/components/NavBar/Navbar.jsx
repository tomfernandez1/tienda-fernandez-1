import React from "react";
import CartWidget from "./CartWidget.jsx";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div id="" className="">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">KIOSCO</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/comocomprar">¿Cómo Comprar?</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pormayor">Ventas Por Mayor</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/nosotros">Sobre Nosotros</Link>
              </li>
              <CartWidget/>  
      </ul>
          </div>
        </div>
      </nav>
        </div>
    );
}

export default Navbar;