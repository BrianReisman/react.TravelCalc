import React from "react";

export default function Input({ name, inputType, placeHolder, onChange }) {
  return (
    <div>
      <label> {name}: $
        <input id={name} type={inputType} placeholder={placeHolder} onChange={onChange} />
      </label>.00
    </div>
  );
}
