import "../styles/inputField.css";
import React, { useState } from "react";
import Popup from "./Popup";
import { MonthlyReport } from "../models/MonthlyReport";
import { Structure } from "../models/Structure";
import { InputFieldState } from "../models/InputFIeldState";

interface InputProps {
  name: string;
  unit: string;
  category: string;
  structure: Structure;
}

export default function ({ name, unit, category, structure}: InputProps) {
  const [inputValue, setInputValue] = useState(0);
  
  type ObjectKeySetter = keyof typeof structure.inputFieldSetter;
  const objKeySetter = name as ObjectKeySetter;
  structure.inputFieldSetter[objKeySetter] = new InputFieldState(inputValue, setInputValue);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(event.target.value));
    console.log("in der Methode setMonthlyData");
    setMonthlyData(category, name, Number(event.target.value), structure.monthlyReport);
    console.log(structure.monthlyReport);
  };

  const setMonthlyData = (
    theme: string,
    field: string,
    value: number,
    report: MonthlyReport
  ) => {
    switch (theme) {
      case "Health":
        type ObjectKeyHealth = keyof typeof report.health;
        const objKeyHealth = field as ObjectKeyHealth;
        report.health[objKeyHealth] = value;
        break;
      case "Safety":
        type ObjectKeySafety = keyof typeof report.safety;
        const objKeySafety = field as ObjectKeySafety;
        report.safety[objKeySafety] = value;
        break;
      case "Energy":
        type ObjectKeyEnergy = keyof typeof report.energy;
        const objKeyEnergy = field as ObjectKeyEnergy;
        report.energy[objKeyEnergy] = value;
        break;
      case "Material":
        type ObjectKeyMatertial = keyof typeof report.material;
        const objKeyMaterial = field as ObjectKeyMatertial;
        report.material[objKeyMaterial] = value;
        break;
      case "Waste":
        type ObjectKeyWaste = keyof typeof report.waste;
        const objKeyWaste = field as ObjectKeyWaste;
        report.waste[objKeyWaste] = value;
        break;
      default:
        throw new Error("Category not found");
    }
  };

  const getFieldName = (field: string): string => {
    type ObjectKeyFields = keyof typeof structure.fields;
    const objKeyField = field as ObjectKeyFields;
    return structure.fields[objKeyField]
  };

  // setInputValue(getStartValue(name, report).toString());

  return (
    <div className="mb-3 w-100 mx-auto marginTop">
      <div className="input-group w-90 mx-auto">
        <label className="input-group-text textWidth">{getFieldName(name)}</label>
        <input
          title={getFieldName(name)}
          type="number"
          className="form-control"
          id={getFieldName(name)}
          onChange={handleInputChange}
          aria-describedby="basic-addon3 basic-addon4"
          value={inputValue}
        ></input>
        <span className="input-group-text unitWidth" id="basic-addon3">
          {unit}
        </span>
        <Popup />
        {/* <img src='frage.png' className='questionmark ms-3' alt='Question'/> */}
      </div>
    </div>
  );
}
