import React, { useEffect } from "react";
import { InputFormProps } from "../Post.intefact";

export default function InputForm({setData, example} : InputFormProps) {
    const inputhandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData(e.currentTarget.value);
    };
  return (
    <>
      <input type="text" className="input_form" placeholder={example} onChange={inputhandler}/>
    </>
  );
}
