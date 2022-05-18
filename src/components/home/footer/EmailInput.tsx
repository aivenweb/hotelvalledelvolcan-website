import React from "react";

interface EmailInputProps {}

const EmailInput: React.FC<EmailInputProps> = () => {
  return (
    <div className="textbox">
      <form className="form-inline">
        <div className="form-group">
          <div className="input-group">
            <input
              type="email"
              className="form-control"
              placeholder="Tu dirección email"
            />
            <button className="btn btn-secondary" type="button">
              <img src="/assets/images/icons/send-paper-plane.svg" alt="" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmailInput;
