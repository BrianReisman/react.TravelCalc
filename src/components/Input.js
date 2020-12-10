import React from "react";

export default function Input({ name, inputType, placeHolder, onChange, value }) {
  return (
    <div>
      <label> {name}: $
        <input value={value} id={name} type={inputType} placeholder={placeHolder} onChange={onChange} />
      </label>.00
    </div>
  );
}
