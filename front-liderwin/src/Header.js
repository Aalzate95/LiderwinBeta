import "./assets/css/header.css";
import "./assets/css/styles.css";
import useFetch from "./useFetch"

import { Link } from "react-router-dom";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegEnvelope,
  FaUser,
  FaDollarSign,
  FaHeart,
  FaShoppingCart
} from "react-icons/fa";

import logo from "./assets/images/logo-liderwin.png";

const Header = () => {
  /* const { error, isPending, data} = useFetch("http://localhost:3001/categorias") */
  const {data} = useFetch("http://localhost:3001/categorias")
  return (
    <div>
      <head>
        <link type="text/css" rel="stylesheet" href="/css/bootstrap.min.css" />
      </head>
      <body>
        <header>
          <div id="top-header">
            <div className="container">
              <ul className="header-links pull-left">
                <li>
                  <a href="/#">
                    <i className="fa fa-envelope-o">
                      <FaRegEnvelope />
                    </i>{" "}
                    ventas@liderwin.com
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <i className="fa fa-phone">
                      <FaPhoneAlt />
                    </i>{" "}
                    (+593) 950 518400
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <i className="fa fa-map-marker">
                      <FaMapMarkerAlt />
                    </i>{" "}
                    C.C. Buenavista Plaza B5 Local 5, Samborondón
                  </a>
                </li>
              </ul>
              <ul className="header-links pull-right">
                <li>
                  {/* <Link to="/home"> */}
                  <i className="fa fa-dollar">
                    <FaDollarSign />
                  </i>
                  USD
                  {/* </Link> */}
                </li>
                <li>
                  <div>
                    <Link to='/perfil'>
                    <i className="fa fa-user-o">
                      <FaUser />
                    </i>
                    Perfil
                    </Link>
                  </div>
                </li>
                <li>
                  <div>
                    <Link to='/registro'>
                    <i className="fa fa-user-o">
                      <FaUser />
                    </i>
                    Registrarse
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div id="header">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <Link className="header-logo" to="/inicio">
                    <img src={logo} alt="" />
                  </Link>
                </div>
                <div className="col-md-6" id="guia1">
                  <div className="header-search">
                    <form>
                      <select className="input-select">
                        <option value="0">Categorías</option>
                        {
                          data && data.map((e) => (
                            <option key={e.idCategoria} value={e.idCategoria}>{e.nombre}</option>
                          ))
                        }
                      </select>
                      <input className="input" placeholder="Buscar aquí" />
                      <button className="search-btn">Buscar</button>
                    </form>
                  </div>
                </div>
                <div className="col-md-3 clearfix">
                  <div className="header-ctn">
                    <div>
                      <a href="/#">
                        <i className="fa fa-heart-o"></i>
                        <span>Mis Favoritos</span>
                        <i>
                          <FaHeart />
                        </i>
                        <div className="qty">2</div>
                      </a>
                    </div>

                    <div className="dropdown">
                      <a
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="true"
                        href="/#"
                      >
                        <i className="fa fa-shopping-cart"></i>
                        <span>Mi Carrito</span>
                        <i>
                          <FaShoppingCart />
                        </i>
                        <div className="qty">7</div>
                      </a>
                      <div className="cart-dropdown">
                        <div className="cart-list">
                          <div className="product-widget">
                            <div className="product-img">
                              <img src="./img/ledvance_smart.png" alt="" />
                            </div>
                            <div className="product-body">
                              <h3 className="product-name">
                                <a href="/#">Ledvance SMART+</a>
                              </h3>
                              <h4 className="product-price">
                                <span className="qty">2x</span>$56.00
                              </h4>
                            </div>
                            <button className="delete">
                              <i className="fa fa-close"></i>
                            </button>
                          </div>

                          <div className="product-widget">
                            <div className="product-img">
                              <img src="./img/nexxt_a19.png" alt="" />
                            </div>
                            <div className="product-body">
                              <h3 className="product-name">
                                <a href="/#">Nexxt A19</a>
                              </h3>
                              <h4 className="product-price">
                                <span className="qty">5x</span>$105.00
                              </h4>
                            </div>
                            <button className="delete">
                              <i className="fa fa-close"></i>
                            </button>
                          </div>
                        </div>
                        <div className="cart-summary">
                          <small>7 Item(s) seleccionado(s)</small>
                          <h5>SUBTOTAL: $161.00</h5>
                        </div>
                        <div className="cart-btns">
                          <a href="/#">Ver Carrito</a>
                          <a href="/compra.html">
                            Comprar <i className="fa fa-arrow-circle-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="menu-toggle">
                      <a href="/#">
                        <i className="fa fa-bars"></i>
                        <span>Menú</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </body>
    </div>
  );
};

export default Header;
