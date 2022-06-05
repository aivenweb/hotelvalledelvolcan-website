import React, { useLayoutEffect } from "react";
import DatePickerInputComponent from "./components/DatePickerInputComponent";
import ReservationRoomsInputComponent from "./components/ReservationRoomsInputComponent";
import RoomsAndGuestInputComponent from "./components/RoomsAndGuestInputComponent";

interface ReservationSidebarProps {}

const ReservationSidebar: React.FC<ReservationSidebarProps> = () => {
  useLayoutEffect(() => {
    $('#datepicker1').datepicker();
    $('#datepicker2').datepicker();
  })
  
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
