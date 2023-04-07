import React, { useState, useRef, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";
import {AiOutlineCaretRight} from "react-icons/ai"
import {
  MultiSelectBoxProps,
  DetailOption,
  Detail,
} from "../Post.intefact";

export default function MultiSelectForm(props: MultiSelectBoxProps) {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [showDetailOptions, setShowDetailOptions] = useState<boolean>(false);
  const [hover, setHover] = useState<string>("");
  const target: any = useRef("");

  const outsideSelect = (e: any) => {
    if (target.current != null && !target.current.contains(e.target)) {
      setShowOptions(false);
      setShowDetailOptions(false);
    }
  };
  const ShowSelectOptions = () => {
    setShowOptions(true);
  };
  const ShowDetailOptions = (value: string) => {
    setHover(value);
    setShowDetailOptions(true);
  };

  const ClickOptions = (option: string, value:string) => {
    setShowDetailOptions(false);
    setShowOptions(false);
    console.log(value);
    if (props.data.find((element) => element === option) === undefined) {
      props.data[0] === props.default
        ? (props.data[0] = option)
        : props.data.push(option);
      props.setData(props.data);
    }
  };
  const ResetSelectOptions = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    props.setData([props.default]);
  };

  useEffect(() => {
    document.addEventListener("mousedown", outsideSelect);
  });
  return (
    <div ref={target}>
      <ul className="select_form" onClick={ShowSelectOptions} tabIndex={0}>
        <li className="selected_option">{props.data.join(", ")}</li>
        <div className="select_right">
          <div className="reset">
            <button
              onClick={ResetSelectOptions}
              type="button"
              className="btn btn-light btn-sm"
            >
              <GrPowerReset />
            </button>
          </div>
          <div className="division">&nbsp;</div>
          <span>
            <MdKeyboardArrowDown className="picker" />
          </span>
        </div>
      </ul>
      {showOptions ? (
        <ul className="multi_select_options">
          {props.options.map((option: DetailOption) => {
            return (
              <li
                key={option.value}
                className="multi_select_option"
                onMouseEnter={(e) => ShowDetailOptions(option.value)}
              >
                <span>
                {option.value}
                </span>
              <AiOutlineCaretRight className="right" />
              </li>
            );
          })}
        </ul>
      ) : null}

      {showDetailOptions ? (
        <ul className="multi_select_options">
          {props.options.map((option: DetailOption) => {
            return(
            option.value === hover ? (
              option.detail.map((detailvalue:Detail,index:number) => {
                 return (
                   <li
                     key={detailvalue.option}
                     style={{top:`${index*37}px`}}
                     className="multi_select_detail_option"
                     onClick={(e) =>ClickOptions(detailvalue.option,option.value)}
                   >
                     {detailvalue.option}
                   </li>
                 );
              })
              ) : null
            )
          })}
        </ul>
      ) : null}
    </div>
  );
}
