import React from "react";
import DatePickerInputComponent from "./DatePickerInputComponent";
import ReservationRoomsInputComponent from "./ReservationRoomsInputComponent";
import RoomsAndGuestInputComponent from "./RoomsAndGuestInputComponent";

interface ReservationSidebarProps {}

const ReservationSidebar: React.FC<ReservationSidebarProps> = () => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
      <div className="sidebar">
        {/* <!-- WIDGET CHECK AVAILABILITY --> */}
        <div className="widget widget_check_availability">
          <h4 className="widget-title">Completa tu reservación</h4>
          <div className="check_availability">
            <h6 className="check_availability_title">Días de estancia</h6>
            <DatePickerInputComponent
              title="Ingreso"
              inputID="datepicker1"
              placeholder="Fecha de llegada"
            />
            <DatePickerInputComponent
              title="Salida"
              inputID="datepicker2"
              placeholder="Fecha de partida"
            />
            <h6 className="check_availability_title">Habitaciones</h6>
            <ReservationRoomsInputComponent />
            <RoomsAndGuestInputComponent />
            <button className="btn-room btn">Reservar</button>
          </div>
        </div>
        {/* <!-- END / WIDGET CHECK AVAILABILITY --> */}
      </div>
    </div>
  );
};

export default ReservationSidebar;
