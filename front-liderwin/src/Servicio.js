import "./assets/css/servicio.css";
import "./assets/css/styles.css";

import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

import asesorias from "./assets/images/services/cellphone.png";
import instalacion from "./assets/images/services/instalacion.png";
import envio from "./assets/images/services/shipping.png";
import garantia from "./assets/images/services/devolucion.png";

const Servicio = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <div id="breadcrumb" className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="breadcrumb-header">Nuestros servicios</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row">
            <h4 className="col-md-7 text-center subheader">
              Nos aseguraremos que te sientas cómodo y feliz con nuestros
              productos ofreciéndote múltiples servicios. Siempre dispuestos
              para ti.
            </h4>

            <div className="services">
              <div className="col-md-5 service">
                <div className="service-img">
                  <img src={instalacion} alt="" />
                </div>
                <div className="section-title">
                  <h3 className="title">Instalación</h3>
                </div>
                <div className="service-caption">
                  <p>Instalación y conexión de luminarias y reflectores</p>
                </div>
                <button className="secondary-btn more-info">
                  <i className="fa fa-info"></i>más información
                </button>
              </div>
              <div className="col-md-5 service">
                <div className="service-img">
                  <img src={envio} alt="" />
                </div>
                <div className="section-title">
                  <h3 className="title">Envío Inmediato</h3>
                </div>
                <div className="service-caption">
                  <p>Recibe tu pedido entre 2 y 4 días laborables</p>
                </div>
                <button className="secondary-btn more-info">
                  <i className="fa fa-info"></i>más información
                </button>
              </div>
              <div className="col-md-5 service">
                <div className="service-img">
                  <img src={asesorias} alt="" />
                </div>
                <div className="section-title">
                  <h3 className="title">Asesorías</h3>
                </div>
                <div className="service-caption">
                  <p>
                    Si necesitas asesoramiento para realizar tu compra, llámanos
                  </p>
                </div>
                <button className="secondary-btn more-info">
                  <i className="fa fa-info"></i>más información
                </button>
              </div>
              <div className="col-md-5 service">
                <div className="service-img">
                  <img src={garantia} alt="" />
                </div>
                <div className="section-title">
                  <h3 className="title">Garantía</h3>
                </div>
                <div className="service-caption">
                  <p>
                    Hasta 30 días para realizar reposición por defectos de
                    fábrica
                  </p>
                </div>
                <button className="secondary-btn more-info">
                  <i className="fa fa-info"></i>más información
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Servicio;
