import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

import "./assets/css/inicio.css";
import "./assets/css/producto.css";
import "./assets/css/styles.css";

import sylvania from "./assets/images/publicidad/Sylvania.png";
import ledvance from "./assets/images/publicidad/ledvance.png";
import nexxt from "./assets/images/publicidad/nexxt.png";

import ledsmart from "./assets/images/products/ledvance_smart.png";
import ledosram from "./assets/images/products/ledvance_osram.png";
import nexxt_a19 from "./assets/images/products/nexxt_a19.png";
import sylvaToledo from "./assets/images/products/sylvania_toledo.png";
import sylvaLyra from "./assets/images/products/sylvania_lyra.png";
import sylvaOpera from "./assets/images/products/sylvania_opera.png";
import sylvaGerdens from "./assets/images/products/sylvania_garden.png";
import sylvaShark from "./assets/images/products/sylvania_shark.png";
import sylvar1mini from "./assets/images/products/sylvania_r1_mini.png";
import sylvania_r3 from "./assets/images/products/sylvania_r3.png";
import nexxt_nebula300 from "./assets/images/products/nexxt/nexxt_nebula300.png";
import nexxt_nyx from "./assets/images/products/nexxt/nexxt_nyx.png";
import nexxt_amp300 from "./assets/images/products/nexxt/nexxt_amp300.png";
import archer_ax55 from "./assets/images/products/routers/ARCHER-AX55.png";
import MR8300 from "./assets/images/products/routers/MR8300.png";
import AX1800_RAX10 from "./assets/images/products/routers/AX1800_RAX10.png";
import ledvance_floodlight_sensor from "./assets/images/products/ledvance_floodlight_sensor.png";
import ledvance_floodlight_LP from "./assets/images/products/ledvance_floodlight_LP.png";
import sylvania_jeta_high from "./assets/images/products/sylvania_jeta_high.png";
import sylvania_sports from "./assets/images/products/sylvania_sports.png";
import sylvania_jeta_sensor from "./assets/images/products/sylvania_jeta_sensor.png";
import sylvania_high_start from "./assets/images/products/sylvania_high_start.png";
import ledvance_arealight from "./assets/images/products/ledvance_arealight.png";
import sylvania_lighturban from "./assets/images/products/sylvania_lighturban.png";
import sylvania_zd216 from "./assets/images/products/sylvania_zd216.png";
import ledvance_lumilux from "./assets/images/products/ledvance_lumilux.png";
import ledvance_51titan from "./assets/images/products/ledvance_51titan.png";
import sylvania_estaca from "./assets/images/products/sylvania_estaca.png";

import Slider from "react-slick";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as fasFaStar,

  faExchangeAlt,

  faShoppingCart as fasFaShoppingCart
} from "@fortawesome/free-solid-svg-icons";
import {
  faStar as farFaStar,
  faHeart as farFaHeart,
  faEye as farFaEye
} from "@fortawesome/free-regular-svg-icons";

const Inicio = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <Header />
      <Navbar />
      <div className="section">
        <div className="container">
          <div className="row shop-group">
            <div className="col-md-4 col-xs-6">
              <div className="shop">
                <div className="shop-img">
                  <img src={sylvania} alt="" />
                </div>
              </div>
            </div>

            <div className="col-md-4 col-xs-6">
              <div className="shop">
                <div className="shop-img">
                  <img src={ledvance} alt="" />
                </div>
              </div>
            </div>

            <div className="col-md-4 col-xs-6">
              <div className="shop">
                <div className="shop-img">
                  <img src={nexxt} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h3 className="title">Nuevos Productos</h3>
                <div className="section-nav">
                  <ul className="section-tab-nav tab-nav">
                    <li className="active">
                      <a data-toggle="tab" href="/#tab1">
                        Focos Led
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="/#tab1">
                        Lámparas
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="/#tab1">
                        Reflectores
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="/#tab1">
                        Enrutadores
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="row">
                <div className="products-tabs">
                  <div id="tab1" className="tab-pane active">
                    <Slider {...settings} />
                    <div className="products-slick" data-nav="#slick-nav-1">
                      <div className="product">
                        <div className="product-img">
                          <img src={ledsmart} alt="" />
                          <div className="product-label">
                            <span className="sale">-30%</span>
                            <span className="new">NUEVO</span>
                          </div>
                        </div>
                        <div className="product-body">
                          <p className="product-category">Foco Led</p>
                          <h3 className="product-name">
                            <a href="/#">Ledvance SMART+</a>
                          </h3>
                          <h4 className="product-price">
                            $28.00{" "}
                            <del className="product-old-price">$40.00</del>
                          </h4>
                          <div className="product-rating">
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={fasFaStar} />
                          </div>
                          <div className="product-btns">
                            <button className="add-to-wishlist">
                              <FontAwesomeIcon icon={farFaHeart} />
                              <span className="tooltipp">
                                agregar a favoritos
                              </span>
                            </button>
                            <button className="add-to-compare">
                              <FontAwesomeIcon icon={faExchangeAlt} />
                              <span className="tooltipp">comparar</span>
                            </button>
                            <button className="quick-view">
                              <FontAwesomeIcon icon={farFaEye} />
                              <span className="tooltipp">vista rápida</span>
                            </button>
                          </div>
                        </div>
                        <div className="add-to-cart">
                          <button className="add-to-cart-btn">
                            <FontAwesomeIcon icon={fasFaShoppingCart} /> agregar
                            al carrito
                          </button>
                        </div>
                      </div>

                      <div className="product">
                        <div className="product-img">
                          <img src={ledosram} alt="" />
                          <div className="product-label">
                            <span className="new">NUEVO</span>
                          </div>
                        </div>
                        <div className="product-body">
                          <p className="product-category">Foco Led</p>
                          <h3 className="product-name">
                            <a href="/#">Ledvance OSRAM</a>
                          </h3>
                          <h4 className="product-price">
                            $22.00{" "}
                            <del className="product-old-price">$25.00</del>
                          </h4>
                          <div className="product-rating">
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={farFaStar} />
                          </div>
                          <div className="product-btns">
                            <button className="add-to-wishlist">
                              <FontAwesomeIcon icon={farFaHeart} />
                              <span className="tooltipp">
                                agregar a favoritos
                              </span>
                            </button>
                            <button className="add-to-compare">
                              <FontAwesomeIcon icon={faExchangeAlt} />
                              <span className="tooltipp">comparar</span>
                            </button>
                            <button className="quick-view">
                              <FontAwesomeIcon icon={farFaEye} />
                              <span className="tooltipp">vista rápida</span>
                            </button>
                          </div>
                        </div>
                        <div className="add-to-cart">
                          <button className="add-to-cart-btn">
                            <FontAwesomeIcon icon={fasFaShoppingCart} /> agregar
                            al carrito
                          </button>
                        </div>
                      </div>

                      <div className="product">
                        <div className="product-img">
                          <img src={nexxt_a19} alt="" />
                          <div className="product-label">
                            <span className="sale">-30%</span>
                          </div>
                        </div>
                        <div className="product-body">
                          <p className="product-category">Foco Led</p>
                          <h3 className="product-name">
                            <a href="/#">Nexxt A19</a>
                          </h3>
                          <h4 className="product-price">
                            $21.00{" "}
                            <del className="product-old-price">$30.00</del>
                          </h4>
                          <div className="product-rating">
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={farFaStar} />
                            <FontAwesomeIcon icon={farFaStar} />
                          </div>
                          <div className="product-btns">
                            <button className="add-to-wishlist">
                              <FontAwesomeIcon icon={farFaHeart} />
                              <span className="tooltipp">
                                agregar a favoritos
                              </span>
                            </button>
                            <button className="add-to-compare">
                              <FontAwesomeIcon icon={faExchangeAlt} />
                              <span className="tooltipp">comparar</span>
                            </button>
                            <button className="quick-view">
                              <FontAwesomeIcon icon={farFaEye} />
                              <span className="tooltipp">vista previa</span>
                            </button>
                          </div>
                        </div>
                        <div className="add-to-cart">
                          <button className="add-to-cart-btn">
                            <FontAwesomeIcon icon={fasFaShoppingCart} /> agregar
                            al carrito
                          </button>
                        </div>
                      </div>

                      <div className="product">
                        <div className="product-img">
                          <img src={sylvaToledo} alt="" />
                        </div>
                        <div className="product-body">
                          <p className="product-category">Foco Led</p>
                          <h3 className="product-name">
                            <a href="/#">Sylvania TOLEDO SMART</a>
                          </h3>
                          <h4 className="product-price">
                            $20.00{" "}
                            <del className="product-old-price">$22.00</del>
                          </h4>
                          <div className="product-rating">
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={farFaStar} />
                          </div>
                          <div className="product-btns">
                            <button className="add-to-wishlist">
                              <FontAwesomeIcon icon={farFaHeart} />
                              <span className="tooltipp">
                                agregar a favoritos
                              </span>
                            </button>
                            <button className="add-to-compare">
                              <FontAwesomeIcon icon={faExchangeAlt} />
                              <span className="tooltipp">comparar</span>
                            </button>
                            <button className="quick-view">
                              <FontAwesomeIcon icon={farFaEye} />
                              <span className="tooltipp">vista previa</span>
                            </button>
                          </div>
                        </div>
                        <div className="add-to-cart">
                          <button className="add-to-cart-btn">
                            <FontAwesomeIcon icon={fasFaShoppingCart} /> agregar
                            al carrito
                          </button>
                        </div>
                      </div>

                      <div className="product">
                        <div className="product-img">
                          <img src={sylvaLyra} alt="" />
                        </div>
                        <div className="product-body">
                          <p className="product-category">Foco Led</p>
                          <h3 className="product-name">
                            <a href="/#">Sylvania Led LYRA</a>
                          </h3>
                          <h4 className="product-price">
                            $57.00{" "}
                            <del className="product-old-price">$77.00</del>
                          </h4>
                          <div className="product-rating">
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={fasFaStar} />
                          </div>
                          <div className="product-btns">
                            <button className="add-to-wishlist">
                              <FontAwesomeIcon icon={farFaHeart} />
                              <span className="tooltipp">
                                agregar a favoritos
                              </span>
                            </button>
                            <button className="add-to-compare">
                              <FontAwesomeIcon icon={faExchangeAlt} />
                              <span className="tooltipp">comparar</span>
                            </button>
                            <button className="quick-view">
                              <FontAwesomeIcon icon={farFaEye} />
                              <span className="tooltipp">vista previa</span>
                            </button>
                          </div>
                        </div>
                        <div className="add-to-cart">
                          <button className="add-to-cart-btn">
                            <FontAwesomeIcon icon={fasFaShoppingCart} /> agregar
                            al carrito
                          </button>
                        </div>
                      </div>
                    </div>
                    <div id="slick-nav-1" className="products-slick-nav"></div>
                  </div>
                  <Slider />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="hot-deal" className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hot-deal">
                <ul className="hot-deal-countdown">
                  <li>
                    <div>
                      <h3>02</h3>
                      <span>Días</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h3>10</h3>
                      <span>Horas</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h3>34</h3>
                      <span>Minutos</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h3>59</h3>
                      <span>Segundos</span>
                    </div>
                  </li>
                </ul>
                <h2 className="text-uppercase">ofertas de la semana</h2>
                <p>Nueva Colección Hasta 50% DE DESCUENTO</p>
                <a className="primary-btn cta-btn" href="/#">
                  ¡Compra ya!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h3 className="title">Más vendidos</h3>
                <div className="section-nav">
                  <ul className="section-tab-nav tab-nav">
                    <li>
                      <a data-toggle="tab" href="/#tab2">
                        Focos Led
                      </a>
                    </li>
                    <li className="active">
                      <a data-toggle="tab" href="/#tab2">
                        Lámparas
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="/#tab2">
                        Reflectores
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="/#tab2">
                        Enrutadores
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="row">
                <div className="products-tabs">
                  <div id="tab2" className="tab-pane fade in active">
                    <div className="products-slick" data-nav="#slick-nav-2">
                      <div className="product">
                        <div className="product-img">
                          <img src={sylvaOpera} alt="" />
                          <div className="product-label">
                            <span className="sale">-30%</span>
                            <span className="new">NUEVO</span>
                          </div>
                        </div>
                        <div className="product-body">
                          <p className="product-category">Lámpara</p>
                          <h3 className="product-name">
                            <a href="/#">Led Opera</a>
                          </h3>
                          <h4 className="product-price">
                            $27.90{" "}
                            <del className="product-old-price">$50.50</del>
                          </h4>
                          <div className="product-rating">
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={fasFaStar} />
                          </div>
                          <div className="product-btns">
                            <button className="add-to-wishlist">
                              <FontAwesomeIcon icon={farFaHeart} />
                              <span className="tooltipp">
                                agregar a favoritos
                              </span>
                            </button>
                            <button className="add-to-compare">
                              <FontAwesomeIcon icon={faExchangeAlt} />
                              <span className="tooltipp">comparar</span>
                            </button>
                            <button className="quick-view">
                              <FontAwesomeIcon icon={farFaEye} />
                              <span className="tooltipp">vista previa</span>
                            </button>
                          </div>
                        </div>
                        <div className="add-to-cart">
                          <button className="add-to-cart-btn">
                            <FontAwesomeIcon icon={fasFaShoppingCart} /> agregar
                            al carrito
                          </button>
                        </div>
                      </div>

                      <div className="product">
                        <div className="product-img">
                          <img src={sylvaGerdens} alt="" />
                          <div className="product-label">
                            <span className="new">NUEVO</span>
                          </div>
                        </div>
                        <div className="product-body">
                          <p className="product-category">Lámpara</p>
                          <h3 className="product-name">
                            <a href="/#">Led Garden</a>
                          </h3>
                          <h4 className="product-price">
                            $48.30{" "}
                            <del className="product-old-price">$60.00</del>
                          </h4>
                          <div className="product-rating">
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={farFaStar} />
                          </div>
                          <div className="product-btns">
                            <button className="add-to-wishlist">
                              <FontAwesomeIcon icon={farFaHeart} />
                              <span className="tooltipp">
                                agregar a favoritos
                              </span>
                            </button>
                            <button className="add-to-compare">
                              <FontAwesomeIcon icon={faExchangeAlt} />
                              <span className="tooltipp">comparar</span>
                            </button>
                            <button className="quick-view">
                              <FontAwesomeIcon icon={farFaEye} />
                              <span className="tooltipp">vista previa</span>
                            </button>
                          </div>
                        </div>
                        <div className="add-to-cart">
                          <button className="add-to-cart-btn">
                            <FontAwesomeIcon icon={fasFaShoppingCart} /> agregar
                            al carrito
                          </button>
                        </div>
                      </div>

                      <div className="product">
                        <div className="product-img">
                          <img src={sylvaShark} alt="" />
                          <div className="product-label">
                            <span className="sale">-30%</span>
                          </div>
                        </div>
                        <div className="product-body">
                          <p className="product-category">Lámpara</p>
                          <h3 className="product-name">
                            <a href="/#">Street Light Shark</a>
                          </h3>
                          <h4 className="product-price">
                            $35.00{" "}
                            <del className="product-old-price">$50.00</del>
                          </h4>
                          <div className="product-rating">
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={fasFaStar} />
                          </div>
                          <div className="product-btns">
                            <button className="add-to-wishlist">
                              <FontAwesomeIcon icon={farFaHeart} />
                              <span className="tooltipp">
                                agregar a favoritos
                              </span>
                            </button>
                            <button className="add-to-compare">
                              <FontAwesomeIcon icon={faExchangeAlt} />
                              <span className="tooltipp">comparar</span>
                            </button>
                            <button className="quick-view">
                              <FontAwesomeIcon icon={farFaEye} />
                              <span className="tooltipp">vista previa</span>
                            </button>
                          </div>
                        </div>
                        <div className="add-to-cart">
                          <button className="add-to-cart-btn">
                            <FontAwesomeIcon icon={fasFaShoppingCart} /> agregar
                            al carrito
                          </button>
                        </div>
                      </div>

                      <div className="product">
                        <div className="product-img">
                          <img src={sylvar1mini} alt="" />
                        </div>
                        <div className="product-body">
                          <p className="product-category">Lámpara</p>
                          <h3 className="product-name">
                            <a href="/#">Led Emergencia R1 Mini</a>
                          </h3>
                          <h4 className="product-price">
                            $29.70{" "}
                            <del className="product-old-price">$45.55</del>
                          </h4>
                          <div className="product-rating">
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={fasFaStar} />
                          </div>
                          <div className="product-btns">
                            <button className="add-to-wishlist">
                              <FontAwesomeIcon icon={farFaHeart} />
                              <span className="tooltipp">
                                Añadir a mi lista
                              </span>
                            </button>
                            <button className="add-to-compare">
                              <FontAwesomeIcon icon={faExchangeAlt} />
                              <span className="tooltipp">Comparar</span>
                            </button>
                            <button className="quick-view">
                              <FontAwesomeIcon icon={farFaEye} />
                              <span className="tooltipp">Vista previa</span>
                            </button>
                          </div>
                        </div>
                        <div className="add-to-cart">
                          <button className="add-to-cart-btn">
                            <FontAwesomeIcon icon={fasFaShoppingCart} /> agregar
                            al carrito
                          </button>
                        </div>
                      </div>

                      <div className="product">
                        <div className="product-img">
                          <img src={sylvania_r3} alt="" />
                        </div>
                        <div className="product-body">
                          <p className="product-category">Lámpara</p>
                          <h3 className="product-name">
                            <a href="/#">Led Emergencia R3</a>
                          </h3>
                          <h4 className="product-price">
                            $177.79{" "}
                            <del className="product-old-price">$199.99</del>
                          </h4>
                          <div className="product-rating">
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={fasFaStar} />
                          </div>
                          <div className="product-btns">
                            <button className="add-to-wishlist">
                              <FontAwesomeIcon icon={farFaHeart} />
                              <span className="tooltipp">add to wishlist</span>
                            </button>
                            <button className="add-to-compare">
                              <FontAwesomeIcon icon={faExchangeAlt} />
                              <span className="tooltipp">add to compare</span>
                            </button>
                            <button className="quick-view">
                              <FontAwesomeIcon icon={farFaEye} />
                              <span className="tooltipp">quick view</span>
                            </button>
                          </div>
                        </div>
                        <div className="add-to-cart">
                          <button className="add-to-cart-btn">
                            <FontAwesomeIcon icon={fasFaShoppingCart} /> agregar
                            al carrito
                          </button>
                        </div>
                      </div>
                    </div>
                    <div id="slick-nav-2" className="products-slick-nav"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-xs-6">
              <div className="section-title">
                <h4 className="title bottom-title">Enrutadores</h4>
                <div className="section-nav">
                  <div id="slick-nav-3" className="products-slick-nav"></div>
                </div>
              </div>

              <div className="products-widget-slick" data-nav="#slick-nav-3">
                <div>
                  <div className="product-widget">
                    <div className="product-img">
                      <img src={nexxt_nebula300} alt="" />
                    </div>
                    <div className="product-body">
                      <p className="product-category">Nexxt</p>
                      <h3 className="product-name">
                        <a href="/#">Nebula 300Mbps</a>
                      </h3>
                      <h4 className="product-price">
                        $21.30 <del className="product-old-price">$24.00</del>
                      </h4>
                    </div>
                  </div>

                  <div className="product-widget">
                    <div className="product-img">
                      <img src={nexxt_nyx} alt="" />
                    </div>
                    <div className="product-body">
                      <p className="product-category">Nexxt</p>
                      <h3 className="product-name">
                        <a href="/#">NYX 1200Mbps</a>
                      </h3>
                      <h4 className="product-price">
                        $21.41<del className="product-old-price">$27.66</del>
                      </h4>
                    </div>
                  </div>

                  <div className="product-widget">
                    <div className="product-img">
                      <img src={nexxt_amp300} alt="" />
                    </div>
                    <div className="product-body">
                      <p className="product-category">Nexxt</p>
                      <h3 className="product-name">
                        <a href="/#">AMP 300Mbps</a>
                      </h3>
                      <h4 className="product-price">
                        $23.20 <del className="product-old-price">$32.10</del>
                      </h4>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="product-widget">
                    <div className="product-img">
                      <img src={archer_ax55} alt="" />
                    </div>
                    <div className="product-body">
                      <p className="product-category">Tp-Link</p>
                      <h3 className="product-name">
                        <a href="/#">Archer AX55</a>
                      </h3>
                      <h4 className="product-price">
                        $129.99 <del className="product-old-price">$199.99</del>
                      </h4>
                    </div>
                  </div>

                  <div className="product-widget">
                    <div className="product-img">
                      <img src={MR8300} alt="" />
                    </div>
                    <div className="product-body">
                      <p className="product-category">Linksys</p>
                      <h3 className="product-name">
                        <a href="/#">MR8300 MU-MIMO</a>
                      </h3>
                      <h4 className="product-price">
                        $389.99 <del className="product-old-price">$450.50</del>
                      </h4>
                    </div>
                  </div>

                  <div className="product-widget">
                    <div className="product-img">
                      <img src={AX1800_RAX10} alt="" />
                    </div>
                    <div className="product-body">
                      <p className="product-category">Netgear</p>
                      <h3 className="product-name">
                        <a href="/#">AX1800 (RAX10)</a>
                      </h3>
                      <h4 className="product-price">
                        $114.50 <del className="product-old-price">$139.99</del>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-xs-6">
              <div className="section-title">
                <h4 className="title bottom-title">Reflectores</h4>
                <div className="section-nav">
                  <div id="slick-nav-4" className="products-slick-nav"></div>
                </div>
              </div>

              <div className="products-widget-slick" data-nav="#slick-nav-4">
                <div>
                  <div className="product-widget">
                    <div className="product-img">
                      <img src={ledvance_floodlight_sensor} alt="" />
                    </div>
                    <div className="product-body">
                      <p className="product-category">Ledvance</p>
                      <h3 className="product-name">
                        <a href="/#">Floodlight Sensor</a>
                      </h3>
                      <h4 className="product-price">
                        $35.00 <del className="product-old-price">$40.00</del>
                      </h4>
                    </div>
                  </div>

                  <div className="product-widget">
                    <div className="product-img">
                      <img src={ledvance_floodlight_LP} alt="" />
                    </div>
                    <div className="product-body">
                      <p className="product-category">Ledvance</p>
                      <h3 className="product-name">
                        <a href="/#">Floodlight Low Power</a>
                      </h3>
                      <h4 className="product-price">
                        $30.00 <del className="product-old-price">$40.00</del>
                      </h4>
                    </div>
                  </div>

                  <div className="product-widget">
                    <div className="product-img">
                      <img src={sylvania_jeta_high} alt="" />
                    </div>
                    <div className="product-body">
                      <p className="product-category">Sylvania</p>
                      <h3 className="product-name">
                        <a href="/#">Jeta High Power</a>
                      </h3>
                      <h4 className="product-price">
                        $30.00 <del className="product-old-price">$35.00</del>
                      </h4>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="product-widget">
                    <div className="product-img">
                      <img src={sylvania_sports} alt="" />
                    </div>
                    <div className="product-body">
                      <p className="product-category">Sylvania</p>
                      <h3 className="product-name">
                        <a href="/#">Sylveo Sports</a>
                      </h3>
                      <h4 className="product-price">
                        $69.00 <del className="product-old-price">$90.00</del>
                      </h4>
                    </div>
                  </div>

                  <div className="product-widget">
                    <div className="product-img">
                      <img src={sylvania_jeta_sensor} alt="" />
                    </div>
                    <div className="product-body">
                      <p className="product-category">Sylvania</p>
                      <h3 className="product-name">
                        <a href="/#">Jeta Sensor</a>
                      </h3>
                      <h4 className="product-price">
                        $60.00 <del className="product-old-price">$70.00</del>
                      </h4>
                    </div>
                  </div>

                  <div className="product-widget">
                    <div className="product-img">
                      <img src={sylvania_high_start} alt="" />
                    </div>
                    <div className="product-body">
                      <p className="product-category">Sylvania</p>
                      <h3 className="product-name">
                        <a href="/#">High Power Start</a>
                      </h3>
                      <h4 className="product-price">
                        $53.00 <del className="product-old-price">$71.00</del>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="clearfix visible-sm visible-xs"></div> */}

            <div className="col-md-4 col-xs-6">
              <div className="section-title">
                <h4 className="title">Lámparas</h4>
                <div className="section-nav">
                  <div id="slick-nav-5" className="products-slick-nav"></div>
                </div>
              </div>

              <div className="products-widget-slick" data-nav="#slick-nav-5">
                <div>
                  <div className="product-widget">
                    <div className="product-img">
                      <img src={ledvance_arealight} alt="" />
                    </div>
                    <div className="product-body">
                      <p className="product-category">Ledvance</p>
                      <h3 className="product-name">
                        <a href="/#">Arealight</a>
                      </h3>
                      <h4 className="product-price">
                        $180.00 <del className="product-old-price">$220.00</del>
                      </h4>
                    </div>
                  </div>

                  <div className="product-widget">
                    <div className="product-img">
                      <img src={sylvania_lighturban} alt="" />
                    </div>
                    <div className="product-body">
                      <p className="product-category">Sylvania</p>
                      <h3 className="product-name">
                        <a href="/#">Street Light Urban</a>
                      </h3>
                      <h4 className="product-price">
                        $170.00 <del className="product-old-price">$240.00</del>
                      </h4>
                    </div>
                  </div>

                  <div className="product-widget">
                    <div className="product-img">
                      <img src={sylvania_zd216} alt="" />
                    </div>
                    <div className="product-body">
                      <p className="product-category">Sylvania</p>
                      <h3 className="product-name">
                        <a href="/#">Street Light ZD216</a>
                      </h3>
                      <h4 className="product-price">
                        $280.00 <del className="product-old-price">$370.00</del>
                      </h4>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="product-widget">
                    <div className="product-img">
                      <img src={ledvance_lumilux} alt="" />
                    </div>
                    <div className="product-body">
                      <p className="product-category">Ledvance</p>
                      <h3 className="product-name">
                        <a href="/#">Lumilux T5 HE</a>
                      </h3>
                      <h4 className="product-price">
                        $80.00 <del className="product-old-price">$100.00</del>
                      </h4>
                    </div>
                  </div>

                  <div className="product-widget">
                    <div className="product-img">
                      <img src={ledvance_51titan} alt="" />
                    </div>
                    <div className="product-body">
                      <p className="product-category">Ledvance</p>
                      <h3 className="product-name">
                        <a href="/#">Decostar 51 TITAN</a>
                      </h3>
                      <h4 className="product-price">
                        $260.00 <del className="product-old-price">$300.00</del>
                      </h4>
                    </div>
                  </div>

                  <div className="product-widget">
                    <div className="product-img">
                      <img src={sylvania_estaca} alt="" />
                    </div>
                    <div className="product-body">
                      <p className="product-category">Sylvania</p>
                      <h3 className="product-name">
                        <a href="/#">Led Estaca</a>
                      </h3>
                      <h4 className="product-price">
                        $150.00 <del className="product-old-price">$199.00</del>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Inicio;
