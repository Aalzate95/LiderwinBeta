import "./assets/css/footer.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegEnvelope,
  FaCcVisa,
  FaCcPaypal,
  FaCcMastercard,
  FaCcAmex,
  FaCreditCard
} from "react-icons/fa";
const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-xs-6">
            <div className="footer">
              <h3 className="footer-title">ACERCA DE</h3>
              <p>
                Venta e instalación de artículos tecnológicos y de iluminación
                en la ciudad de Guayaquil.
              </p>

              <ul className="footer-links footer-info">
                <li>
                  <i>
                    <FaMapMarkerAlt />
                  </i>
                  <a href="#">C.C. Buenavista Plaza B5 Local 5, Samborondón</a>
                </li>
                <li>
                  <i className="fa fa-phone">
                    <FaPhoneAlt />
                  </i>
                  <a href="#">(+593) 950 518400</a>
                </li>
                <li>
                  <i className="fa fa-envelope-o">
                    <FaRegEnvelope />
                  </i>
                  <a href="#">ventas@liderwin.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-xs-6">
            <div className="footer">
              <h3 className="footer-title">CATEGORIAS</h3>
              <ul className="footer-links">
                <li>
                  <a href="#">Reflectores</a>
                </li>
                <li>
                  <a href="#">Luminarias</a>
                </li>
                <li>
                  <a href="#">Enrutadores</a>
                </li>
                <li>
                  <a href="#">Focos LED</a>
                </li>
                <li>
                  <a href="#">LED Exteriores</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-3 col-xs-6">
            <div className="footer">
              <h3 className="footer-title">INFORMACIÓN</h3>
              <ul className="footer-links">
                <li>
                  <a href="#">Nosotros</a>
                </li>
                <li>
                  <a href="#">Contactos</a>
                </li>
                <li>
                  <a href="#">Politicas</a>
                </li>
                <li>
                  <a href="#">Términos & Condiciones</a>
                </li>
                <li>
                  <a href="#">Equipo</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-3 col-xs-6">
            <div className="footer">
              <h3 className="footer-title">SERVICIOS</h3>
              <ul className="footer-links">
                <li>
                  <a href="#">Mi Cuenta</a>
                </li>
                <li>
                  <a href="compra.html">Ver carrito</a>
                </li>
                <li>
                  <a href="#">Favoritos</a>
                </li>
                <li>
                  <a href="#">Rastrear Orden</a>
                </li>
                <li>
                  <a href="#">Ayuda</a>
                </li>
              </ul>
            </div>
          </div>
          {/* <div id="bottom-footer" className="section">
				<div className="container">
	
					<div className="row"> */}
          <div className="col-md-12 text-center">
            <span className="payments">
              <FaCcVisa size="2.3em" /> <FaCreditCard size="2.3em" />{" "}
              <FaCcPaypal size="2.3em" /> <FaCcMastercard size="2.3em" />{" "}
              <FaCcAmex size="2.3em" />
            </span>
            <span className="copyright">
              Copyright © 2021 All rights reserved by{" "}
              <a href="#" target="_blank">
                TROJANS
              </a>
            </span>
          </div>
          {/* </div></div></div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
