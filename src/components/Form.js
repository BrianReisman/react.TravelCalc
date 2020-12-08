import React, { useState } from "react";
import Section from "./Section";

export default function Form(props) {
  const data = props.data;
  console.log(data)





  //states
  const [dailyTotal, setDailyTotal] = useState({
    food: null,
    activities: null,
    accomodation: null,
    transportation: null,
  });
  // console.log(dailyTotal);
  const [fixedTotal, setFixedTotal] = useState({
    flight: null,
    gear: null,
    insurance: null,
  });
  // console.log(fixedTotal);
  const [nights, setNights] = useState(null); //TODO single value, can this live in a let? Benefit to that?
  // console.log(nights);

  //functions to set state called from input onChange={} properties
  function total(e) {
    setDailyTotal({ ...dailyTotal, [e.target.name]: e.target.value });
  }
  function nites(e) {
    //TODO rename
    setNights(e.target.value);
  }
  function fixed(e) {
    const type =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFixedTotal({ ...fixedTotal, [e.target.name]: type });
  }

  //totals
  const sumFixed = Object.values(fixedTotal)
    .map((num) => Number(num))
    .reduce((total, num) => {
      return total + num;
    });
  const sumDaily = Object.values(dailyTotal)
    .map((num) => Number(num))
    .reduce((total, num) => {
      return total + num;
    });
  let totalDaily = sumDaily * nights;
  // Learn about these: object.key/object.value











  //JSX return
  return (
    <div>
    {data.map(cat => {
      console.log(cat)
      return <Section data={cat} sectionName={cat.sectionName}/>
    })}
      {/* <div>{`Trip Total: $${sumFixed}`}</div>
      <div>{`Total: $${sumDaily}/per day`}</div>
      <div>{`Trip (daily!) Total: $${totalDaily}`}</div>
      <h2>{`Total Trip Costs.... ${totalDaily + sumFixed}`}</h2> */}
    </div>
  );
}
