import React from "react";
import DataInput from "./DataInput";
import NameInput from "./NameInput";

interface TabPersonalDataProps {}

const TabPersonalData: React.FC<TabPersonalDataProps> = () => {
  return (
    <>
      <div className="row reservation-row_container">
        <div className="reservation_personal-data">
          <h4>Ingresa tus datos</h4>
          <NameInput required={true} />
          <DataInput
            label="DNI"
            required={true}
            type="text"
            placeholder="Ingresa tu DNI"
          />
          <DataInput
            label="Correo electrónico"
            required={true}
            type="text"
            placeholder="Ingresa tu email"
          />
          <p>
            Se le enviará la información de la reserva a esta dirección email.
          </p>
          <DataInput
            label="Número de teléfono"
            required={true}
            type="number"
            placeholder="Ingresa un número de teléfono"
          />
          <div className="optional-data">
            <h3>Datos de los demás huéspedes</h3>
            <span>(opcional)</span>
          </div>
          <NameInput required={false} />
          <DataInput
            label="Correo electrónico"
            required={false}
            type="text"
            placeholder="Ingresa tu email"
          />
        </div>
      </div>
      <div className="">
        <div className="row next-step_container">
          <button className="btn-next-step btn">Siguiente paso</button>
        </div>
      </div>
    </>
  );
};

export default TabPersonalData;
