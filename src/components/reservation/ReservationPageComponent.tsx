import React from "react";
import BannerComponent from "../BannerComponent";
import ReservationCalendar from "./ReservationCalendar";
import ReservationSidebar from "./ReservationSidebar";

interface ReservationPageComponentProps {}

const ReservationPageComponent: React.FC<
  ReservationPageComponentProps
> = () => {
  return (
    <>
      <BannerComponent title="Reservación" />
      <section className="section-reservation-page">
        <div className="container">
          <div className="reservation-page">
            {/* <!-- STEP --> */}
            <div className="reservation_step">
              <ul>
                <li className="active">
                  <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                    <span>1.</span> Choose Date
                  </a>
                </li>
                <li>
                  <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                    <span>2.</span> Choose Room
                  </a>
                </li>
                <li>
                  <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                    <span>3.</span> Make a Reservation
                  </a>
                </li>
                <li>
                  <a href="https://landing.engotheme.com/html/skyline/demo/reservation_1.html#">
                    <span>4.</span> Confirmation
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- END / STEP --> */}
            <div className="row">
              <ReservationSidebar />
              <ReservationCalendar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReservationPageComponent;
