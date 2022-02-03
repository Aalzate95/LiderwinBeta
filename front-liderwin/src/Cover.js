import "./assets/css/cover.css";

import { Link } from "react-router-dom";

import logo from "./assets/images/logo-liderwin.png";
import administrador from "./assets/images/administrador.png";
import cliente from "./assets/images/cliente.png";
import Footer from "./Footer";

const Cover = () => {
  return (
    <body className=" text-center fondo">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header>
          <div className="cover-logo">
            <img src={logo} alt="" />
          </div>
          <div className="texto">
            <h1>BIENVENIDO A LIDERWIN</h1>
            <p className="lead">
              Para un mejor experiencia, por favor selecciona tu rol.
            </p>
          </div>
        </header>

        <main className="px-3">
          <div className="users">
            {/* <span> */}
            <div className="perfil">
              <img
                className="fotocover"
                src={administrador}
                alt="Administrador"
              />
              <Link to="/login">
                <button className="secondary-btn administrador">
                  Administrador
                </button>
              </Link>
              {/* </span> */}
            </div>
            <div className="perfil">
              {/* <span> */}
              <img className="fotocover" src={cliente} alt="Cliente" />
              {/* </span> */}
              <Link to="/inicio">
                <button className="secondary-btn cliente">Cliente</button>
              </Link>
            </div>
          </div>
        </main>

        <footer className="mt-auto text-white-50">
          <p className="mt-5 mb-3 footer">
            Copyright © 2021 All rights reserved by TROJANS
          </p>
        </footer>
      </div>
      {/* <Footer /> */}
    </body>
  );
};

export default Cover;
