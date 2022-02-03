import "./assets/css/contacto.css";
import "./assets/css/styles.css";
import { useState } from "react";

import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

import {
  FaPaperPlane,
  FaTrashAlt,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaBell,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedin
} from "react-icons/fa";

const Contacto = () => {
  const [mailMensaje, setMailMensaje] = useState(" ");
  const [mailAsunto, setMailAsunto] = useState(" ");

  return (
    <div>
      <Header />
      <Navbar />
      <div id="breadcrumb" className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="breadcrumb-header breadcrumb-title">
                Contáctanos
              </h3>
              <h4 className="breadcrumb-tree breadcrumb-subtitle">
                Nos gustaría saber de ti
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="message-details">
                <div className="section-title">
                  <h3 className="title">Envíanos un mensaje</h3>
                </div>
                <form className="contact-group">
                  <input
                    className="input"
                    type="text"
                    name="first-name"
                    placeholder="Nombre"
                    required
                  />
                  <input
                    className="input"
                    type="text"
                    name="last-name"
                    placeholder="Apellido"
                    required
                  />
                  <input
                    className="input"
                    type="date"
                    name="birth-date"
                    required
                  />
                  <select className="input" name="birth-place" required>
                    <option value="" disabled selected>
                      Lugar de origen
                    </option>
                    <option value="gye">Guayaquil</option>
                    <option value="uio">Quito</option>
                    <option value="cue">Cuenca</option>
                  </select>
                  <input
                    className="input"
                    type="email"
                    name="email"
                    placeholder="Correo"
                    required
                  />
                  <input
                    className="input"
                    type="text"
                    name="subject"
                    placeholder="Asunto"
                    onChange={(e) => {
                      setMailAsunto(e.target.value);
                    }}
                  />
                  <textarea
                    className="input"
                    placeholder="Tu mensaje"
                    required
                    onChange={(e) => {
                      setMailMensaje(e.target.value);
                    }}
                  ></textarea>
                  <a
                    className="primary-btn message-submit text-decoration-none"
                    href={`mailto:gabrielaramosbaq@gmail.com?subject=${mailAsunto}&body=${mailMensaje}`}
                  >
                    <FaPaperPlane className="icon-send" /> Enviar mensaje
                  </a>
                  <button className="secondary-btn clear-fields" type="reset">
                    <FaTrashAlt className="icon-trash" /> Limpiar
                  </button>
                </form>
              </div>
            </div>

            <div className="col-md-5 vertical-line">
              <div className="liderwin-info">
                <div className="section-title">
                  <h3 className="title">Visítanos</h3>
                </div>
                <div className="enterprise-info">
                  <div className="separator">
                    <FaMapMarkerAlt size="1em" color="#012c73" />
                    <h4>Ubicación de la oficina</h4>
                  </div>
                  <div className="data-1">
                    <label className="city" for="city">
                      Guayaquil
                    </label>
                    <span>
                      C.C. Buenavista Plaza B5 Local 5, Km. 0.5 Vía Samborondón
                      y Av. Rio Vinces
                    </span>
                    <span>Samborondón - 092301</span>
                  </div>
                  <div className="separator">
                    <FaPhoneAlt size="1em" color="#012c73" />
                    <h4>Teléfonos</h4>
                  </div>
                  <div className="data-2">
                    <span>(+593) 4 283 7898</span>
                    <span>(+593) 95 895 4308</span>
                    <span>(+593) 72 939 8248</span>
                  </div>
                  <div className="separator">
                    <FaEnvelope size="1em" color="#012c73" />
                    <h4>Correo electrónico</h4>
                  </div>
                  <div className="data-2">
                    <span>ventas@liderwin.com</span>
                    <span>corporativo@liderwin.com</span>
                  </div>
                  <div className="separator">
                    <FaBell size="1em" color="#012c73" />
                    <h4 className="follow-us">Síguenos</h4>
                  </div>
                  <div className="social-media">
                    <a href="https://www.facebook.com">
                      <FaFacebookF color="#012c73" />
                    </a>
                    <a href="https://www.twitter.com">
                      <FaTwitter color="#012c73" />
                    </a>
                    <a href="https://www.instagram.com">
                      <FaInstagram color="#012c73" />
                    </a>
                    <a href="https://www.linkedin.com">
                      <FaLinkedin color="#012c73" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 office-location">
              <div className="section-title">
                <h3 className="title">Ubicación en Google Maps</h3>
              </div>
              <div className="map-container">
                <iframe
                  className="map-location"
                  title="Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d996.7524912451051!2d-79.86538430450634!3d-2.149871876350857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc221d2592a81a3fa!2zMsKwMDgnNTguNCJTIDc5wrA1MSc1NS45Ilc!5e0!3m2!1sen!2sec!4v1636905401208!5m2!1sen!2sec"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contacto;
