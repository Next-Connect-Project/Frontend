import React, { useState, useRef, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Option, SelectBoxProps } from "../Post.intefact";

export default function SelectForm(props: SelectBoxProps) {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const target: any = useRef("");

  const outsideSelect = (e: any) => {
    if (target.current != null && !target.current.contains(e.target)) {
      setShowOptions(false);
    }
  };
  const ShowSelectOptions = () => {
    setShowOptions(true);
  };

  const ClickOptions = (value: string) => {
    setShowOptions(false);
    props.setData(value);
  };
  useEffect(() => {
    document.addEventListener("mousedown", outsideSelect);
  });
  return (
    <div ref={target}>
      <ul className="select_form" onClick={ShowSelectOptions} tabIndex={0} >
        <li className="selected_option">{props.data}</li>
        <div className="select_right">
          <div className="division">&nbsp;</div>
          <span>
            <MdKeyboardArrowDown className="picker" />
          </span>
        </div>
      </ul>
      {showOptions ? (
        <ul className="select_options">
          {props.options.map((option: Option) => {
            return (
              <li
                key={option.value}
                className="select_option"
                onClick={(e) => ClickOptions(option.value)}
              >
                {option.name}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
