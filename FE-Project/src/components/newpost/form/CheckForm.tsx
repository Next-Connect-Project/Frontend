import React, { useState } from "react";
import { CheckBoxProps } from "../Post.intefact";

export default function CheckForm(props: CheckBoxProps) {
  const [checked, setChecked] = useState<boolean>(true);

  const CheckboxClickHandler = (
    data: string,
    e: React.MouseEvent<HTMLInputElement>
  ) => {
    setChecked(!checked);
    switch (data) {
      case "FrontEnd":
        props.setFrontNumber(0);
        break;
      case "BackEnd":
        props.setBackNumber(0);
        break;
      case "Design":
        props.setDesignNumber(0);
        break;
      case "ProjectManager":
        props.setPmNumber(0);
        break;
      case "Others":
        props.setOthernumber(0);
        break;
      default:
        console.log("error");
    }
  };

  const NumberChangeHandler = (
    data: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    switch (data) {
      case "FrontEnd":
        props.setFrontNumber(Number(e.target.value));
        break;
      case "BackEnd":
        props.setBackNumber(Number(e.target.value));
        break;
      case "Design":
        props.setDesignNumber(Number(e.target.value));
        break;
      case "ProjectManager":
        props.setPmNumber(Number(e.target.value));
        break;
      case "Others":
        props.setOthernumber(Number(e.target.value));
        break;
      default:
        console.log("error");
    }
  };

  const SetDefaultValue = (data: string) => {
    switch (data) {
      case "FrontEnd":
        return props.frontNumber;
      case "BackEnd":
        return props.backNumber;
      case "Design":
        return props.designNumber;
      case "ProjectManager":
        return props.pmNumber;
      case "Others":
        return props.otherNumber;
      default:
        console.log("error");
    }
  };

  return (
    <div className="option_form">
      <input
        type="checkbox"
        className="option_checkbox"
        onClick={(e) => CheckboxClickHandler(props.option, e)}
        checked={checked}
      />
      <label htmlFor={props.option} className="option_label">
        {props.name}
      </label>
      <input
        className="option_number_input"
        type="number"
        step="1"
        min="0"
        max="100"
        value={SetDefaultValue(props.option)}
        disabled={!checked}
        onChange={(e) => NumberChangeHandler(props.option, e)}
      />
    </div>
  );
}
