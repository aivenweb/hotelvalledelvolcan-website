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
          <h4 className="widget-title">YOUR RESERVATION</h4>
          <div className="check_availability">
            <h6 className="check_availability_title">your stay dates</h6>
            <DatePickerInputComponent
              title="Arrive"
              inputID="datepicker1"
              placeholder="Arrival Date"
            />
            <DatePickerInputComponent
              title="Depature"
              inputID="datepicker2"
              placeholder="Departure Date"
            />
            <h6 className="check_availability_title">ROOMS &amp; GUest</h6>
            <ReservationRoomsInputComponent />
            <RoomsAndGuestInputComponent />
            <button className="btn-room btn">CHECK AVAILABLE</button>
          </div>
        </div>
        {/* <!-- END / WIDGET CHECK AVAILABILITY --> */}
      </div>
    </div>
  );
};

export default ReservationSidebar;
