import React from "react";

interface ReservationCalendarProps {}

const ReservationCalendar: React.FC<ReservationCalendarProps> = () => {
  return (
    <div className=" col-lg-9 col-md-8 col-sm-12 col-xs-12">
      <div className="reservation_content bg-gray">
        <h2 className="reservation-heading">Availability</h2>
        <div className="col-sm-6">
          <div className="reservation-calendar_custom">
            <div className="reservation-calendar_title">
              <span className="reservation-calendar_month">JUNE</span>
              <span className="reservation-calendar_year">2017</span>
              <a
                href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#"
                className="reservation-calendar_prev reservation-calendar_corner"
              >
                <i className="ion-ios-arrow-thin-left"></i>
              </a>
            </div>
            <table className="reservation-calendar_tabel">
              <thead>
                <tr>
                  <th>Su</th>
                  <th>Mo</th>
                  <th>Tu</th>
                  <th>We</th>
                  <th>Th</th>
                  <th>Fr</th>
                  <th>Sa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td className="reservation-calendar_current-date">
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>1</small> <span>Today</span>
                    </a>
                  </td>
                  <td>
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>2</small>{" "}
                    </a>
                  </td>
                  <td className=" active">
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>3</small>
                      <span>Arrive</span>
                    </a>
                  </td>
                  <td className=" active">
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>4</small>
                    </a>
                  </td>
                  <td className=" active">
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>5</small>
                    </a>
                  </td>
                  <td className=" active">
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>6</small>
                      <span>Depart</span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>7</small>
                    </a>
                  </td>
                  <td>
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>8</small>
                    </a>
                  </td>
                  <td>
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>9</small>
                    </a>
                  </td>
                  <td>
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>10</small>
                    </a>
                  </td>
                  <td className="reservation-calendar_current-select">
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>11</small>
                    </a>
                  </td>
                  <td className="reservation-calendar_current-select">
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>12</small>
                    </a>
                  </td>
                  <td>
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>13</small>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>14</small>
                    </a>
                  </td>
                  <td>
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>15</small>
                    </a>
                  </td>
                  <td>
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>16</small>
                    </a>
                  </td>
                  <td>
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>17</small>
                    </a>
                  </td>
                  <td>
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>18</small>
                    </a>
                  </td>
                  <td>
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>19</small>
                    </a>
                  </td>
                  <td>
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>20</small>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>21</small>
                    </a>
                  </td>
                  <td>
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>22</small>
                    </a>
                  </td>
                  <td>
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>23</small>
                    </a>
                  </td>
                  <td>
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>24</small>
                    </a>
                  </td>
                  <td>
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>25</small>
                    </a>
                  </td>
                  <td>
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>26</small>
                    </a>
                  </td>
                  <td>
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>27</small>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>28</small>
                    </a>
                  </td>
                  <td>
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>29</small>
                    </a>
                  </td>
                  <td>
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>30</small>
                    </a>
                  </td>
                  <td>
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>31</small>
                    </a>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="reservation-calendar_custom">
            <div className="reservation-calendar_title">
              <span className="reservation-calendar_month">JUNE</span>
              <span className="reservation-calendar_year">2017</span>
              <a
                href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#"
                className="reservation-calendar_next reservation-calendar_corner"
              >
                <i className="ion-ios-arrow-thin-right"></i>
              </a>
            </div>
            <table className="reservation-calendar_tabel">
              <thead>
                <tr>
                  <th>Su</th>
                  <th>Mo</th>
                  <th>Tu</th>
                  <th>We</th>
                  <th>Th</th>
                  <th>Fr</th>
                  <th>Sa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td className="reservation-calendar_current-date">
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>1</small>
                    </a>
                  </td>
                  <td className="current-select">
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>2</small>
                    </a>
                  </td>
                  <td className="current-select">
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>3</small>
                    </a>
                  </td>
                  <td className="current-select">
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>4</small>
                    </a>
                  </td>
                  <td className="current-select">
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>5</small>
                    </a>
                  </td>
                  <td>
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>6</small>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>7</small>
                    </a>
                  </td>
                  <td>
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>8</small>
                    </a>
                  </td>
                  <td>
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>9</small>
                    </a>
                  </td>
                  <td>
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>10</small>
                    </a>
                  </td>
                  <td className="reservation-calendar_current-select">
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>11</small>
                    </a>
                  </td>
                  <td className="reservation-calendar_current-select">
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>12</small>
                    </a>
                  </td>
                  <td>
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>13</small>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>14</small>
                    </a>
                  </td>
                  <td>
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>15</small>
                    </a>
                  </td>
                  <td>
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>16</small>
                    </a>
                  </td>
                  <td>
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>17</small>
                    </a>
                  </td>
                  <td>
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>18</small>
                    </a>
                  </td>
                  <td>
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>19</small>
                    </a>
                  </td>
                  <td>
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>20</small>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>21</small>
                    </a>
                  </td>
                  <td>
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>22</small>
                    </a>
                  </td>
                  <td>
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>23</small>
                    </a>
                  </td>
                  <td>
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>24</small>
                    </a>
                  </td>
                  <td>
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>25</small>
                    </a>
                  </td>
                  <td>
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>26</small>
                    </a>
                  </td>
                  <td>
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>27</small>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>28</small>
                    </a>
                  </td>
                  <td>
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>29</small>
                    </a>
                  </td>
                  <td>
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>30</small>
                    </a>
                  </td>
                  <td>
                    <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                      <small>31</small>
                    </a>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationCalendar;
