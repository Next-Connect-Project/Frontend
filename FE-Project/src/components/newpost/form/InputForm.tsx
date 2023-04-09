import React, { useEffect } from "react";
import { InputFormProps } from "../Post.intefact";

export default function InputForm({data, setData, example} : InputFormProps) {
    const inputhandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData(e.currentTarget.value);
    };
    useEffect(() => {
        console.log(data);
    },[data])
  return (
    <>
      <input type="text" className="input_form" placeholder={example} onChange={inputhandler}/>
    </>
  );
}
