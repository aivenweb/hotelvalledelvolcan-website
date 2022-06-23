import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import EmailInput from "./EmailInput";
import IconSection from "./IconSection";
import { Link } from "react-router-dom";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div id="footer">
      <footer className="footer-sky">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-xs-2 col-sm-3 col-md-1 col-lg-1 mail-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="col-xs-10 col-sm-9 col-md-7 col-lg-5 email-input">
                <EmailInput />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-6 text-right icon-section">
                <IconSection />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-mid">
          <div className="container">
            <div className="row padding-footer-mid">
              <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                <div className="footer-logo text-center list-content">
                  <a href="/index.html" title="Skyline">
                    <img src="./Home 1_files/sky-logo-footer.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2 col-lg-offset-1 col-md-offset-1">
                <div className="list-content">
                  <ul>
                    <li>
                      <Link to="/sobre-nosotros" title="">
                        Sobre Nosotros
                      </Link>
                    </li>
                    {/* <li>
                      <a href="/#rooms" title="">
                        Precios
                      </a>
                    </li> */}
                    <li>
                      <Link
                        to="/reservacion"
                        title=""
                      >
                        Reservas
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/nuestros-servicios"
                        title=""
                      >
                        Servicios
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2 col-lg-offset-1 col-md-offset-1">
                <div className="list-content">
                  <ul>
                    <li>
                      <a
                        href="http://landing.engotheme.com/html/skyline/demo/index.html#"
                        title=""
                      >
                        Contacto
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://landing.engotheme.com/html/skyline/demo/index.html#"
                        title=""
                      >
                        Ubicación
                      </a>
                    </li>
                  </ul>
                </div>
              </div> */}
              <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2 col-lg-offset-1 col-md-offset-1">
                <div className="list-content">
                  <ul>
                    <li>
                      <a
                        href="http://landing.engotheme.com/html/skyline/demo/index.html#"
                        title=""
                      >
                        Herrero Ducloux 120, Copahue Q8348AGA Argentina
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://api.whatsapp.com/send?phone=5491122578646"
                        title=""
                      >
                        +54 9 2942 66-9435
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 no-padding">
                Copyright © 2022 by
                <a
                  href="http://landing.engotheme.com/html/skyline/demo/index.html#"
                  title=""
                >
                  Nicole Tevez.
                </a>
                Hotel Valle del Volcán
              </div>
              {/* <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 no-padding">
                <div className="payments text-right">
                  <ul>
                    <li>
                      <a
                        href="http://landing.engotheme.com/html/skyline/demo/index.html#"
                        title="Paypal"
                      >
                        <img src="./Home 1_files/Paypal.png" alt="Paypal" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://landing.engotheme.com/html/skyline/demo/index.html#"
                        title="Visa"
                      >
                        <img src="./Home 1_files/Visa.png" alt="Visa" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://landing.engotheme.com/html/skyline/demo/index.html#"
                        title="Master"
                      >
                        <img
                          src="./Home 1_files/Master-card.png"
                          alt="Master"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://landing.engotheme.com/html/skyline/demo/index.html#"
                        title="Discover"
                      >
                        <img src="./Home 1_files/Discover.png" alt="Discover" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
