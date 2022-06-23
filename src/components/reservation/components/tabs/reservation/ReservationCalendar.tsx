import React, { useState } from "react";
import Calendar, {
  DateCallback,
  OnChangeDateCallback,
  OnChangeDateRangeCallback,
} from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface ReservationCalendarProps {
  dateFrom: Date;
  dateTo: Date;
  onDateFromChange: (date: Date) => void;
  onDateToChange: (date: Date) => void;
}

const ReservationCalendar: React.FC<ReservationCalendarProps> = ({
  dateFrom,
  dateTo,
  onDateFromChange,
  onDateToChange,
}) => {
  dateFrom.setHours(0, 0, 0);
  dateTo.setHours(23, 59, 59);
  console.log(dateFrom);
  console.log(dateTo);
  const changeDateHandle: OnChangeDateRangeCallback | OnChangeDateCallback = (
    values: Date[]
  ) => {
    onDateFromChange(values[0]);

    if (values.length > 1) onDateToChange(values[1]);
  };

  return (
    <div>
      <div className=" col-lg-9 col-md-8 col-sm-12 col-xs-12">
        <div className="reservation_content bg-gray">
          <h2 className="reservation-heading">Disponibilidad</h2>
          <div>
            <div id="calendar-1" className="col-sm-12">
              <Calendar
                onChange={changeDateHandle}
                value={[dateFrom, dateTo]}
                selectRange={true}
                minDate={new Date()}
                showDoubleView={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationCalendar;
