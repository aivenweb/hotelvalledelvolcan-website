import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface ReservationCalendarProps {}

const ReservationCalendar: React.FC<ReservationCalendarProps> = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className=" col-lg-9 col-md-8 col-sm-12 col-xs-12">
      <div className="reservation_content bg-gray">
        <h2 className="reservation-heading">Disponibilidad</h2>
        <div>
          <div id="calendar-1" className="col-sm-6">
            <Calendar
              onChange={setDate}
              value={date}
              selectRange={true}
              minDate={new Date()}
            />
          </div>
          <div id="calendar-2" className="col-sm-6">
            <Calendar
              onChange={setDate}
              value={date}
              selectRange={true}
              minDate={new Date()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationCalendar;
