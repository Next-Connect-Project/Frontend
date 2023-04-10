import React, { useEffect, useState } from "react";
import { CheckboxOption, CheckBoxProps } from "../Post.intefact";

export default function CheckForm(props: CheckBoxProps) {
  const [checked, setChecked] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);

  const CheckboxClickHandler = (index: number) => {
    let copy = [...checked];
    copy[index] = !copy[index];
    setChecked(copy);
  };

  const NumberChangeHandler = (
    data: string,
    e: React.ChangeEvent<HTMLInputElement> | any
  ) => {
    switch (data) {
      case "FrontEnd":
        props.setFrontNumber(e.target.value);
        break;
      case "BackEnd":
        props.setBackNumber(e.target.value);
        break;
      case "Design":
        props.setDesignNumber(e.target.value);
        break;
      case "ProjectManager":
        props.setPMNumber(e.target.value);
        break;
      case "Others":
        props.setOthernumber(e.target.value);
        break;
      default:
        console.log("error");
    }
  };
  
  return (
    <div className="checkbox_form">
      {props.options.map((data: CheckboxOption, index: number) => {
        return (
          <div className="option_form" key={data.value}>
            <input
              type="checkbox"
              id={data.value}
              className="option_checkbox"
              onClick={(e) => CheckboxClickHandler(index)}
            />
            <label htmlFor={data.value} className="option_label">
              {data.name}
            </label>
            <input
              className="option_number_input"
              type="number"
              step="1"
              min="1"
              disabled={!checked[index]}
              onChange={(e) => NumberChangeHandler(data.value, e)}
            />
          </div>
        );
      })}
    </div>
  );
}
