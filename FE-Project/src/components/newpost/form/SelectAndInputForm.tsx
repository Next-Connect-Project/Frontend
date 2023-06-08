import React, { useState, useRef, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Option, SelectAndInputBoxProps } from "../Post.intefact";

export default function SelectAndInputForm(props: SelectAndInputBoxProps) {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>(props.default);
  const [input, setInput] = useState<string>("");
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
    setSelected(value);
  };
  const inputhandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
    props.setData(selected + ": " + input);
  };

  useEffect(() => {
    document.addEventListener("mousedown", outsideSelect);
  });
  return (
    <div ref={target}>
      <ul className="select_form" onClick={ShowSelectOptions} tabIndex={0}>
        <li className="selected_option">{selected}</li>
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
                {option.value}
              </li>
            );
          })}
        </ul>
      ) : null}
      {selected === "선택해주세요(필수)" ? null : selected === "이메일" ? (
        <input
          type="email"
          className="select_input_form "
          required
          onChange={inputhandler}
          placeholder="abcd@gmail.com"
        />
      ) : selected === "연락처" ? (
        <input
          type="tel"
          className="select_input_form "
          required
          onChange={inputhandler}
          placeholder="010-OOOO-OOOO"
        />
      ) : (
        <input
          type="text"
          className="select_input_form "
          required
          onChange={inputhandler}
          placeholder="링크 및 기타 연락방법을 입력해주세요."
        />
      )}
    </div>
  );
}
