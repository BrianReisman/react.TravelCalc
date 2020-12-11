import React, {useState} from "react";
import Input from "./Input";
import { v4 as uuidv4 } from 'uuid'; 

export default function Section({ data }) {
  const stateObj = {};
  const makeSectionStateObj = () => {
    const arrayOfInputs = data.inputs;
    arrayOfInputs.forEach((input) => {
      stateObj[input.name] = '';
    })
  }
  makeSectionStateObj();

  const [sectionTotal, setSectionTotal] = useState(stateObj);
// console.log(sectionTotal); //>>each of the objects holding state
console.log(sectionTotal)
//This is a test function wired up to the onChange for each input
  const changeHandler = (e) => {
    const { value } = e.target;
    setSectionTotal({...sectionTotal, [e.target.id]: value})
  };
  
  return (
    <>
      <h3>{data.sectionName}</h3>
      {data.inputs.map((input) => {
        return (
          <Input
            key={uuidv4()}
            inputType={input.type}
            value={sectionTotal[input.name]}
            onChange={changeHandler}
            name={input.name}
            placeHolder={input.placeHolder}
          />
        );
      })}
    </>
  );
}
