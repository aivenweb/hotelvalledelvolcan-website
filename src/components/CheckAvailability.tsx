import React from "react";

interface CheckAvailabilityProps {}

const CheckAvailability: React.FC<CheckAvailabilityProps> = () => {
  return (
    <div id="checkout-section">
      <div className="check-avail">
        <div className="container">
          <div className="arrival date-title">
            <label>Fecha de ingreso</label>
            <div
              id="datepicker"
              className="input-group date"
              data-date-format="dd-mm-yyyy"
            >
              <input className="form-control" type="text" />
              <span className="input-group-addon">
                <img src="/assets/images/icons/calendario.png" alt="#" />
              </span>
            </div>
          </div>
          <div className="departure date-title">
            <label>Fecha de salida</label>
            <div
              id="datepickeri"
              className="input-group date"
              data-date-format="dd-mm-yyyy"
            >
              <input className="form-control" type="text" />
              <span className="input-group-addon">
                <img src="/assets/images/icons/calendario.png" alt="#" />
              </span>
            </div>
          </div>
          <div className="adults date-title">
            <label>Adultos</label>
            <form>
              <div className="carousel-search">
                <div className="btn-group">
                  <a
                    className="btn dropdown-toggle"
                    data-toggle="dropdown"
                    href="http://landing.engotheme.com/html/skyline/demo/index.html#"
                  >
                    2
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      1
                    </li>
                    <li>
                      2
                    </li>
                    <li>
                      3
                    </li>
                    <li>
                      4
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
          <div className="children date-title">
            <label>Niños</label>
            <form>
              <div className="carousel-search">
                <div className="btn-group">
                  <a
                    className="btn dropdown-toggle"
                    data-toggle="dropdown"
                    href="http://landing.engotheme.com/html/skyline/demo/index.html#"
                  >
                    2
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      0
                    </li>
                    <li>
                      1
                    </li>
                    <li>
                      2
                    </li>
                    <li>
                      3
                    </li>
                    <li>
                      4
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
          <div className="find_btn date-title">
            <div className="text-find">
              Confirmar
              <br />
              Disponibilidad
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckAvailability;