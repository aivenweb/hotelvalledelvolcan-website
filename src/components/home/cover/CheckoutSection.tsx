import React from "react";

interface CheckoutSectionProps {}

const CheckoutSection: React.FC<CheckoutSectionProps> = () => {
  return (
    <div id="checkout-section">
      <div className="check-avail check-avail-v3">
        <div className="container">
          <div className="arrival date-title">
            <label>Arrival Date </label>
            <div
              id="datepicker"
              className="input-group date"
              data-date-format="dd-mm-yyyy"
            >
              <input className="form-control" type="text" />
              <span className="input-group-addon">
                <img src="./Home 1_files/date-icon.png" alt="#" />
              </span>
            </div>
          </div>
          <div className="departure date-title">
            <label>Departure Date </label>
            <div
              id="datepickeri"
              className="input-group date"
              data-date-format="dd-mm-yyyy"
            >
              <input className="form-control" type="text" />
              <span className="input-group-addon">
                <img src="./Home 1_files/date-icon.png" alt="#" />
              </span>
            </div>
          </div>
          <div className="adults date-title">
            <label>Adults</label>
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
                      <div>1</div>
                    </li>
                    <li>
                      <div>2</div>
                    </li>
                    <li>
                      <div>3</div>
                    </li>
                    <li>
                      <div>4</div>
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
          <div className="children date-title">
            <label>Children</label>
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
                      <div>1</div>
                    </li>
                    <li>
                      <div>2</div>
                    </li>
                    <li>
                      <div>3</div>
                    </li>
                    <li>
                      <div>4</div>
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
          <div className="find_btn date-title">
            <div className="text-find">
              Check
              <br />
              Availability
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSection;