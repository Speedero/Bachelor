import '../styles/inputField.css'
import Popup from './Popup'

interface InputProps {
  name: string;
  unit: string;
}

export default function ({ name, unit }: InputProps) {
  return (
    <div className="mb-3 w-75 mx-auto marginTop">
      <div className="input-group w-75 mx-auto">
        <label className="input-group-text w-25">{name}</label>
        <input
          title="in"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3 basic-addon4"
        ></input>
        <span className="input-group-text" id="basic-addon3">
          {unit}
        </span>
        <Popup />
        {/* <img src='frage.png' className='questionmark ms-3' alt='Question'/> */}
      </div>
    </div>
  );
}
