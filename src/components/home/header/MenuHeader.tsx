import React from "react";

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
            <a
              className="navbar-brand"
              href="file:///E:/Xampp/htdocs/skyline/index.html"
              title="Skyline"
            >
              <img src="./Home 1_files/sky-logo-header.png" alt="#" />
            </a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown ">
                <a
                  href="http://landing.engotheme.com/html/skyline/demo/index.html"
                  title="Home"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Inicio
                </a>
              </li>
              <li className="dropdown ">
                <a
                  href="http://landing.engotheme.com/html/skyline/demo/room_1.html"
                  title="Room &amp; Rate"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Reservas
                </a>
              </li>
              <li className="dropdown ">
                <a
                  href="http://landing.engotheme.com/html/skyline/demo/index.html#"
                  title="  Page"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Servicios
                </a>
              </li>
              <li className="dropdown ">
                <a
                  href="http://landing.engotheme.com/html/skyline/demo/reservation_1.html"
                  title="Reservation"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Nosotros
                </a>
              </li>
              <li className="dropdown ">
                <a
                  href="http://landing.engotheme.com/html/skyline/demo/gallery_1.html"
                  title="Gallery"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Galería 
                </a>
              </li>
              <li>
                <a
                  href="http://landing.engotheme.com/html/skyline/demo/about.html"
                  title="About"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="http://landing.engotheme.com/html/skyline/demo/contact.html"
                  title="Contact"
                >
                  Contacto
                </a>
              </li>
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
