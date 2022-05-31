import React from "react";
import './ReservationPageComponent.css';
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
                  <a href="/">
                    <span>1.</span> Datos de la reserva
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>2.</span> Elige una habitación
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>3.</span> Datos personales
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>4.</span> Confirmación de reserva
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
