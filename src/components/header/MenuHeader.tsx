import React from "react";
import { Link } from "react-router-dom";

interface MenuHeaderProps {}

const MenuHeader: React.FC<MenuHeaderProps> = () => {
  return (
    <div className="menu-header">
      <nav className="navbar navbar-fixed-top">
        <div className="container">
          <div className="navbar-header ">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar "></span>
              <span className="icon-bar "></span>
              <span className="icon-bar "></span>
            </button>
            <Link
              className="navbar-brand"
              to="/"
              title="Skyline"
            >
              <img src="./Home 1_files/sky-logo-header.png" alt="#" />
            </Link>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown ">
                <Link
                  to="/"
                  title="Inicio"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Inicio
                </Link>
              </li>
              {/* <li className="dropdown ">
                <Link
                  to="/reservacion"
                  title="Reservas"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Reservas
                </Link>
              </li> */}
              {/* <li className="dropdown ">
                <Link
                  to="/sobre-nosotros"
                  title="Nosotros"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Nosotros
                </Link>
              </li> */}
              <li className="dropdown ">
                <Link
                  to="/nuestros-servicios"
                  title="Servicios"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Servicios
                </Link>
              </li>
              {/* <li>
                <a
                  href="http://landing.engotheme.com/html/skyline/demo/about.html"
                  title="About"
                >
                  Blog
                </a>
              </li> */}
              {/* <li>
                <a
                  href="http://landing.engotheme.com/html/skyline/demo/contact.html"
                  title="Contact"
                >
                  Contacto
                </a>
              </li> */}
              {/* <li className="dropdown ">
                <a
                  href="http://landing.engotheme.com/html/skyline/demo/room_1.html"
                  title="Room &amp; Rate"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Reservas
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MenuHeader;
