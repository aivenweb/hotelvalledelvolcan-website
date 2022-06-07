import { useState } from "react";
import ReservationSidebar from "./ReservationSidebar";
import ReservationCalendar from "./ReservationCalendar";

const TabReservation: React.FC<{}> = () => {
  const [dateFrom, setDateFrom] = useState<Date>(new Date());
  const [dateTo, setDateTo] = useState<Date>(new Date());

  const dateFromChangeHandle = (date: Date) => {
    setDateFrom(date);

    if (date >= dateTo) {
      setDateTo(date);
    }
  };

  const dateToChangeHandle = (date: Date) => {
    if (date > dateFrom) {
      setDateTo(date);
    }
  };

  return (
    <>
      <ReservationSidebar
        dateFrom={dateFrom}
        dateTo={dateTo}
        onDateFromChange={dateFromChangeHandle}
        onDateToChange={dateToChangeHandle}
      />
      <ReservationCalendar
        dateFrom={dateFrom}
        dateTo={dateTo}
        onDateFromChange={dateFromChangeHandle}
        onDateToChange={dateToChangeHandle}
      />
    </>
  );
};

export default TabReservation;
