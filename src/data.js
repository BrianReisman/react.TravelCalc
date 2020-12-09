import { v4 as uuidv4 } from 'uuid';

const data = [
  {
    sectionName: "Fixed Costs",
    inputs: [
      {
        name: "flight",
        id: uuidv4(),
        type: "number",
        onChange: "",
        placeHolder: "you walking?",
      },
      {
        name: "gear",
        id: uuidv4(),
        type: "number",
        onChange: "",
        placeHolder: "You need nothing??",
      },
      {
        name: "insuance",
        id: uuidv4(),
        type: "number",
        onChange: "",
        placeHolder: "No risk right?",
      },
    ],
  },
  {
    sectionName: "Daily Costs",
    inputs: [
      {
        name: "food",
        id: uuidv4(),
        type: "number",
        onChange: "",
        placeHolder: "MMMMMM",
      },
      {
        name: "accomedation",
        id: uuidv4(),
        type: "number",
        onChange: "",
        placeHolder: "Mr. camper, where you sleeping?",
      },
      {
        name: "transportation",
        id: uuidv4(),
        type: "number",
        onChange: "",
        placeHolder: "Walking is overrated",
      },
      {
        name: "activities",
        id: uuidv4(),
        type: "number",
        onChange: "",
        placeHolder: "You just sitting around?",
      },
      {
        name: "Label",
        id: uuidv4(),
        type: "checkbox",
        onChange: "",
        placeHolder: "test?",
      },
    ],
  },
];

export default data;