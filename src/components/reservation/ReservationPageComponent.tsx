import React, { useState } from "react";
import "./ReservationPageComponent.css";
import BannerComponent from "../BannerComponent";
import ReservationCalendar from "./ReservationCalendar";
import ReservationSidebar from "./ReservationSidebar";

interface ReservationPageComponentProps {}

const ReservationPageComponent: React.FC<
  ReservationPageComponentProps
> = () => {
  const [showTab, setShowTab] = useState(1);

  const handleShowTab = (tabId: number) => {
    setShowTab(tabId);
  };

  const getActiveClassName = (tabId: number, className: string) =>
    showTab === tabId ? className : "";

  return (
    <div id="reservation-page">
      <BannerComponent title="Reservación" />
      <section className="section-reservation-page">
        <div className="container">
          <div className="reservation-page">
            {/* <!-- STEPS --> */}
            <div className="reservation_step">
              <ul>
                <li className={`${getActiveClassName(1, "active-tabs active")}`} onClick={() => handleShowTab(1)}>
                  <div>
                    <span>1.</span> Datos de la reserva
                  </div>
                </li>
                <li className={`${getActiveClassName(2, "active-tabs active")}`} onClick={() => handleShowTab(2)}>
                  <div>
                    <span>2.</span> Elige una habitación
                  </div>
                </li>
                <li className={`${getActiveClassName(3, "active-tabs active")}`} onClick={() => handleShowTab(3)}>
                  <div>
                    <span>3.</span> Datos personales
                  </div>
                </li>
                <li className={`${getActiveClassName(4, "active-tabs active")}`} onClick={() => handleShowTab(4)}>
                  <div>
                    <span>4.</span> Confirmación de reserva
                  </div>
                </li>
              </ul>
            </div>
            {/* <!-- END / STEPS --> */}
            <div className="row">
              <div className={`content ${getActiveClassName(1, "active-content")}`}>
                <ReservationSidebar />
                <ReservationCalendar />
              </div>
              <div className={`content ${getActiveClassName(2, "active-content")}`}>TAB 1</div>
              <div className={`content ${getActiveClassName(3, "active-content")}`}>TAB 2</div>
              <div className={`content ${getActiveClassName(4, "active-content")}`}>TAB 3</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReservationPageComponent;
