//! I can make this a section component and reuse it for daily and fixed...? Feeding in different data props for h3 tag?

import React from "react";
import Input from "./Input";

export default function Section({ data, sectionName }) {
  console.log(data);

  const testFunc = (e) => {
    const { value } = e.target;
    console.log(value);
  };

  return (
    <>
      <h3>{sectionName}</h3>
      {data.inputs.map((input) => {
        return (
          <Input
            inputType={input.type}
            onChange={testFunc}
            name={input.id}
            placeHolder={input.placeHolder}
          />
        );
      })}
    </>
  );
}
