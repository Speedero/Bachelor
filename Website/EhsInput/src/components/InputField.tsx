import '../styles/inputField.css'
import React, { useState } from 'react';
import Popup from './Popup'
import { MonthlyReport } from '../models/MonthlyReport';

interface InputProps {
  name: string;
  unit: string;
  report: MonthlyReport;
}

export default function ({ name, unit, report }: InputProps) {
  const [inputValue, setInputValue] = useState('');

  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }


  return (
    <div className="mb-3 w-100 mx-auto marginTop">
      <div className="input-group w-90 mx-auto">
        <label className="input-group-text textWidth">{name}</label>
        <input
          title={name}
          className="form-control"
          id={name}
          value={inputValue}
          onChange={handleInputChange}
          aria-describedby="basic-addon3 basic-addon4"
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
