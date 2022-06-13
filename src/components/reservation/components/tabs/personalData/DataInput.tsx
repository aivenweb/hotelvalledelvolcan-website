import React from "react";

interface DataInputProps {
    label: string;
    required: boolean;
    type: string;
    placeholder: string;
}

const DataInput: React.FC<DataInputProps> = ({ label, required, type, placeholder }) => {
  return (
    <>
      <label>
        {label} 
        { required && <sup> *</sup>}
      </label>
      <input type={type} className="input-text" placeholder={placeholder} />
    </>
  );
};

export default DataInput;
