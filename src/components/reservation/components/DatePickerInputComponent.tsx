import React from "react";

interface DatePickerInputComponentProps {
    title: string;
    inputID: string;
    placeholder: string;
}

const DatePickerInputComponent: React.FC<
  DatePickerInputComponentProps
> = ({ title, inputID, placeholder}) => {
  return (
    <div className="check_availability-field">
      <label>{title}</label>
      <div
        className="input-group date"
        data-date-format="dd-mm-yyyy"
        id={inputID}
      >
        <input
          className="form-control wrap-box"
          type="text"
          placeholder={placeholder}
        />
        <span className="input-group-addon">
          <i className="fa fa-calendar" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  );
};

export default DatePickerInputComponent;
