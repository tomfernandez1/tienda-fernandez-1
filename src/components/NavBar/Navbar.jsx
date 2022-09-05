import CartWidget from "./CartWidget.jsx"
function Navbar() {
    return (
        <div id="" className="">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">DECO</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Productos
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Cómo Comprar</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Ventas por Mayor</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sobre Nosotros</a>
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