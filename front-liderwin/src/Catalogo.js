import "./assets/css/producto.css";
import "./assets/css/styles.css";

import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

import Slider from "@mui/material/Slider";

// import antique from "https://sylvania.com.ec/wp-content/uploads/2019/12/Antique-producto.jpg";

const Catalogo = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="section">
        <div className="container">
          <div className="row">
            <div id="aside" className="col-md-3">
              <div className="aside">
                <h3 className="aside-title">CATEGORÍAS</h3>
                <div className="checkbox-filter">
                  <div className="input-checkbox">
                    <input type="checkbox" id="category-1" />
                    <label for="category-1">
                      <span></span>
                      LED
                      <small>(120)</small>
                    </label>
                  </div>
                  <div className="input-checkbox">
                    <input type="checkbox" id="category-2" />
                    <label for="category-2">
                      <span></span>
                      Reflector
                      <small>(740)</small>
                    </label>
                  </div>
                  <div className="input-checkbox">
                    <input type="checkbox" id="category-3" />
                    <label for="category-3">
                      <span></span>
                      Interior
                      <small>(1450)</small>
                    </label>
                  </div>
                  <div className="input-checkbox">
                    <input type="checkbox" id="category-4" />
                    <label for="category-4">
                      <span></span>
                      Foco
                      <small>(578)</small>
                    </label>
                  </div>
                  <div className="input-checkbox">
                    <input type="checkbox" id="category-5" />
                    <label for="category-5">
                      <span></span>
                      Cinta
                      <small>(120)</small>
                    </label>
                  </div>
                  <div className="input-checkbox">
                    <input type="checkbox" id="category-6" />
                    <label for="category-6">
                      <span></span>
                      LED Emergencia
                      <small>(740)</small>
                    </label>
                  </div>
                </div>
              </div>
              <div className="aside">
                <h3 className="aside-title">PRECIO</h3>
                <div className="price-filter">
                  <Slider
                    getAriaLabel={() => "Minimum distance shift"}
                    defaultValue={[0, 1000]}
                    value={20}
                    disableSwap
                    valueLabelDisplay="auto"
                    color="primary"
                  />
                  <div className="input-number price-min">
                    <input id="price-min" type="number" />
                    <span className="qty-up">+</span>
                    <span className="qty-down">-</span>
                  </div>
                  <span>-</span>
                  <div className="input-number price-max">
                    <input id="price-max" type="number" />
                    <span className="qty-up">+</span>
                    <span className="qty-down">-</span>
                  </div>
                </div>
              </div>
              <div className="aside">
                <h3 className="aside-title">MARCA</h3>
                <div className="checkbox-filter">
                  <div className="input-checkbox">
                    <input type="checkbox" id="brand-1" />
                    <label for="brand-1">
                      <span></span>
                      SYLVANIA
                      <small>(578)</small>
                    </label>
                  </div>
                  <div className="input-checkbox">
                    <input type="checkbox" id="brand-2" />
                    <label for="brand-2">
                      <span></span>
                      LEDVANCE
                      <small>(125)</small>
                    </label>
                  </div>
                  <div className="input-checkbox">
                    <input type="checkbox" id="brand-3" />
                    <label for="brand-3">
                      <span></span>
                      NEXXT
                      <small>(755)</small>
                    </label>
                  </div>
                </div>
              </div>
              <div className="aside">
                <h3 className="aside-title">MAS VENDIDOS</h3>
                <div className="product-widget">
                  <div className="product-img">
                    <img
                      src="./img/products/bestsellings/spotlight.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="product-body">
                    <p className="product-category">REFLECTOR</p>
                    <h3 className="product-name">
                      <a href="#">LEDVANCE SPOTLIGHT</a>
                    </h3>
                    <h4 className="product-price">$55.00 </h4>
                  </div>
                </div>
                <div className="product-widget">
                  <div className="product-img">
                    <img
                      src="../img/products/bestsellings/jetahigh.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="product-body">
                    <p className="product-category">REFLECTOR</p>
                    <h3 className="product-name">
                      <a href="#">LED REFLECTOR JETA HIGH POWER</a>
                    </h3>
                    <h4 className="product-price">$100.00 </h4>
                  </div>
                </div>
                <div className="product-widget">
                  <div className="product-img">
                    <img
                      src="./img/products/bestsellings/downlight.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="product-body">
                    <p className="product-category">REFLECTOR</p>
                    <h3 className="product-name">
                      <a href="#">LEDVANCE DOWNLIGHT G2</a>
                    </h3>
                    <h4 className="product-price">$25.00</h4>
                  </div>
                </div>
                <div className="product-widget">
                  <div className="product-img">
                    <img src="./img/products/bestsellings/estaca.jpeg" alt="" />
                  </div>
                  <div className="product-body">
                    <p className="product-category">LED</p>
                    <h3 className="product-name">
                      <a href="#">LED ESTACA</a>
                    </h3>
                    <h4 className="product-price">$39.00</h4>
                  </div>
                </div>
              </div>
            </div>
            <div id="store" class="col-md-9">
              <div class="store-filter clearfix">
                <div class="store-sort">
                  <label>
                    ORDENAR POR:
                    <select class="input-select">
                      <option value="0">Popularidad</option>
                      <option value="1">Precio</option>
                      <option value="2">Categoría</option>
                    </select>
                  </label>
                </div>
                <ul class="store-grid">
                  <li class="active">
                    <i class="fa fa-th"></i>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-th-list"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="row"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Catalogo;
