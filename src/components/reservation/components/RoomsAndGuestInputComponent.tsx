import React from "react";

interface RoomsAndGuestInputComponentProps {}

const RoomsAndGuestInputComponent: React.FC<
  RoomsAndGuestInputComponentProps
> = () => {
  return (
    <div className="check_availability_group">
      <span className="label-group">Habitación</span>
      <div className="check_availability-field_group">
        <div className="check_availability-field">
          <label>Adulto/s</label>
          <select className="awe-select bs-select-hidden">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
          <div className="btn-group bootstrap-select awe-select">
            <button
              type="button"
              className="btn dropdown-toggle btn-default"
              data-toggle="dropdown"
              title="1"
            >
              <span className="filter-option pull-left">1</span>
              &nbsp;<span className="caret"></span>
            </button>
            <div className="dropdown-menu open">
              <ul className="dropdown-menu inner" role="menu">
                <li data-original-index="0" className="selected">
                  <a className="" data-tokens="null">
                    <span className="text">1</span>
                    <span className="glyphicon glyphicon-ok check-mark"></span>
                  </a>
                </li>
                <li data-original-index="1">
                  <a className="" data-tokens="null">
                    <span className="text">2</span>
                    <span className="glyphicon glyphicon-ok check-mark"></span>
                  </a>
                </li>
                <li data-original-index="2">
                  <a className="" data-tokens="null">
                    <span className="text">3</span>
                    <span className="glyphicon glyphicon-ok check-mark"></span>
                  </a>
                </li>
                <li data-original-index="3">
                  <a className="" data-tokens="null">
                    <span className="text">4</span>
                    <span className="glyphicon glyphicon-ok check-mark"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="check_availability-field">
          <label>Niño/s</label>
          <select className="awe-select bs-select-hidden">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <div className="btn-group bootstrap-select awe-select">
            <button
              type="button"
              className="btn dropdown-toggle btn-default"
              data-toggle="dropdown"
              title="1"
            >
              <span className="filter-option pull-left">1</span>
              &nbsp;<span className="caret"></span>
            </button>
            <div className="dropdown-menu open">
              <ul className="dropdown-menu inner" role="menu">
                <li data-original-index="0" className="selected">
                  <a className="" data-tokens="null">
                    <span className="text">1</span>
                    <span className="glyphicon glyphicon-ok check-mark"></span>
                  </a>
                </li>
                <li data-original-index="1">
                  <a className="" data-tokens="null">
                    <span className="text">2</span>
                    <span className="glyphicon glyphicon-ok check-mark"></span>
                  </a>
                </li>
                <li data-original-index="2">
                  <a className="" data-tokens="null">
                    <span className="text">3</span>
                    <span className="glyphicon glyphicon-ok check-mark"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsAndGuestInputComponent;
