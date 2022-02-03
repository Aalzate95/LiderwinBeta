import "./assets/css/navbar.css";
import "./assets/css/styles.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="navigation">
      <div className="container">
        <div id="responsive-nav">
          <ul className="main-nav nav navbar-nav">
            <li>
              <Link to="/inicio">Inicio</Link>
            </li>
            <li>
              <Link to="/catalogo">Catálogo</Link>
            </li>
            <li>
              <Link to="/servicios">Servicios</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
            <li>
              <Link to="/equipo">Equipo</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
