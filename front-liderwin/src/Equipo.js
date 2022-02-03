import "./assets/css/equipo.css";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

import juan from "./assets/images/team/Juan.jpg";
import gabriela from "./assets/images/team/Gabriela.jpg";
import joby from "./assets/images/team/Joby.jpg";
import wesley from "./assets/images/team/Wesley.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

const Equipo = () => {
  return (
    <body>
      <Header />
      <Navbar />
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="team">
              <div className="col-md-4 member">
                <img className="member-img juan" src={juan} alt="Juan" />
                <div className="section-title member-name">
                  <h3 className="title">Juan Pita</h3>
                </div>
                <p className="summary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>
                <h4 className="member-role">Líder/ Programador 1</h4>
                <h4 className="member-email">jxpita@espol.edu.ec</h4>
                <div className="social-networks">
                  <a
                    href="https://www.facebook.com/jxpita17"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a
                    href="https://twitter.com/jxpita"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a
                    href="https://www.instagram.com/jxpita"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    href="https://github.com/jxpita"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>

              <div className="col-md-4 member">
                <img
                  className="member-img gabriela"
                  src={gabriela}
                  alt="Gabriela"
                />
                <div className="section-title member-name">
                  <h3 className="title">Gabriela Ramos</h3>
                </div>
                <p className="summary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>
                <h4 className="member-role">Diseñadora/ Programador 2</h4>
                <h4 className="member-email">grramos@espol.edu.ec</h4>
                <div className="social-networks">
                  <a
                    href="https://www.facebook.com/profile.php?id=100052190711172"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a
                    href="https://twitter.com/gabrielaraamoss"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a
                    href="https://www.instagram.com/gabrielaramosbaque"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    href="https://github.com/gabrielaraamoss"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>

              <div className="col-md-4 member">
                <img className="member-img joby" src={joby} alt="Joby" />
                <div className="section-title member-name">
                  <h3 className="title">Joby Farra</h3>
                </div>
                <p className="summary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>
                <h4 className="member-role">Semi Senior/ Programador 3</h4>
                <h4 className="member-email">jjfarra@espol.edu.ec</h4>
                <div className="social-networks">
                  <a
                    href="https://www.facebook.com/jobyfarra"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a
                    href="https://twitter.com/jobyfarra"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a
                    href="https://www.instagram.com/jobyfarra"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    href="https://github.com/jfnodel"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>

              <div className="col-md-4 member">
                <img className="member-img wesley" src={wesley} alt="Wesley" />
                <div className="section-title member-name">
                  <h3 className="title">Wesley Briones</h3>
                </div>
                <p className="summary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>
                <h4 className="member-role">Junior/ Programador 4</h4>
                <h4 className="member-email">wesgbrio@espol.edu.ec</h4>
                <div className="social-networks">
                  <a
                    href="https://www.facebook.com/wesley.briones"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a
                    href="https://www.twitter.com/gabrielforks"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a
                    href="https://www.instagram.com/wesleybriones"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    href="https://github.com/wesleybriones"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </body>
  );
};

export default Equipo;
