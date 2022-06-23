import React, { useLayoutEffect, useState } from "react";

interface CheckAvailabilityProps {}

const CheckAvailability: React.FC<CheckAvailabilityProps> = () => {
  const [adults, setAdults] = useState<number>(1);
  const [children, setChildren] = useState<number>(0);

  useLayoutEffect(() => {
    $('#datepicker').datepicker();
    $('#datepickeri').datepicker();
  }, [])

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
                  <div
                    className="btn dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    {adults}
                  </div>
                  <ul className="dropdown-menu">
                    <li onClick={() => setAdults(1)}>
                      1
                    </li>
                    <li onClick={() => setAdults(2)}>
                      2
                    </li>
                    <li onClick={() => setAdults(3)}>
                      3
                    </li>
                    <li onClick={() => setAdults(4)}>
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
                  <div
                    className="btn dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    {children}
                  </div>
                  <ul className="dropdown-menu">
                    <li onClick={() => setChildren(0)}>
                      0
                    </li>
                    <li onClick={() => setChildren(1)}>
                      1
                    </li>
                    <li onClick={() => setChildren(2)}>
                      2
                    </li>
                    <li onClick={() => setChildren(3)}>
                      3
                    </li>
                    <li onClick={() => setChildren(4)}>
                      4
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
          <button className="find_btn date-title">
            <div className="text-find">
              Confirmar
              <br />
              Disponibilidad
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckAvailability;