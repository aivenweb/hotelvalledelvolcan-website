import React from "react";

interface NameInputProps {
  required: boolean;
}

const NameInput: React.FC<NameInputProps> = ({ required }) => {
  return (
    <div className="row">
      <div className="col-sm-6">
        <label>
          Nombre
          {required && <sup> *</sup>}
        </label>
        <input
          type="text"
          className="input-text"
          placeholder="Ingresa tu nombre"
        />
      </div>
      <div className="col-sm-6">
        <label>
          Apellido
          {required && <sup> *</sup>}
        </label>
        <input
          type="text"
          className="input-text"
          placeholder="Ingresa tu apellido"
        />
      </div>
    </div>
  );
};

export default NameInput;
