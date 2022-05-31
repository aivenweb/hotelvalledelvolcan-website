import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface ReservationCalendarProps {}

const ReservationCalendar: React.FC<ReservationCalendarProps> = () => {
  const [date, setDate] = useState(new Date());

  console.log(date);

  return (
    <div className=" col-lg-9 col-md-8 col-sm-12 col-xs-12">
      <Calendar
        onChange={setDate}
        value={date}
        selectRange={true}
        minDate={new Date()}
      />
    </div>
  );
};

export default ReservationCalendar;
