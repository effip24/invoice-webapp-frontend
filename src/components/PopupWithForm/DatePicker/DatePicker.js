import { useEffect, useState } from "react";
import "./DatePicker.css";

import calendar from "../../../utils/date";

const DatePicker = ({ date, onDatePick, isOpen }) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [currentMonthAndYear, setCurrentMonthAndYear] = useState("");
  const [daysInMonth, setDaysInMonth] = useState([]);

  useEffect(() => {
    if (date) {
      calendar.setDate(date);
    } else {
      calendar.setTodaysDate();
    }

    setSelectedDate(
      `${calendar.getDay()} ${calendar.getCurrentMonthAndYear()}`
    );
    setCurrentMonthAndYear(calendar.getCurrentMonthAndYear());
    setDaysInMonth(calendar.getDaysOfCurrentMonth());
    setIsCalendarOpen(false);
  }, [isOpen]);

  const handleCalendarClick = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const handleLastMonthClick = () => {
    calendar.setLastMonth();
    setCurrentMonthAndYear(calendar.getCurrentMonthAndYear());
    setDaysInMonth(calendar.getDaysOfCurrentMonth());
  };

  const handleNextMonthClick = () => {
    calendar.setNextMonth();
    setCurrentMonthAndYear(calendar.getCurrentMonthAndYear());
    setDaysInMonth(calendar.getDaysOfCurrentMonth());
  };

  const handleDatePick = (day) => {
    calendar.setDay(day);
    setSelectedDate(
      `${calendar.getDay()} ${calendar.getCurrentMonthAndYear()}`
    );
    onDatePick(calendar.getFullDate());
    setIsCalendarOpen(false);
  };

  return (
    <>
      <div className="calendar" onClick={handleCalendarClick}>
        <p className="calendar__current-date">{selectedDate}</p>
        <i className="calendar__icon"></i>
      </div>

      <div
        className={`calendar__calendar ${
          isCalendarOpen ? "calendar__calendar_open" : ""
        }`}
      >
        <div className="calendar__months-container">
          <i
            className="calendar__month-change calendar__month-change_type_backward"
            onClick={handleLastMonthClick}
          ></i>
          <p className="calendar__current-date">{currentMonthAndYear}</p>
          <i
            className="calendar__month-change calendar__month-change_type_forward"
            onClick={handleNextMonthClick}
          ></i>
        </div>
        <ul className="calendar__days-list">
          {daysInMonth.map((day, id) => (
            <li
              className={`calendar__day ${
                day === Number(calendar.getDay()) ? "calendar__day_current" : ""
              }`}
              key={id}
              onClick={() => handleDatePick(day)}
            >
              {day}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default DatePicker;
