import React from "react";
import { InputFormProps } from "../Post.intefact";

export default function InputForm({ data, setData, example }: InputFormProps) {
  const inputhandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.currentTarget.value);
  };
  
  return (
    <>
      {data === "" ? (
        <input
          type="text"
          className="input_form"
          placeholder={example}
          onChange={inputhandler}
        />
      ) : (
        <input
          type="text"
          className="input_form"
          value={data}
          onChange={inputhandler}
        />
      )}
    </>
  );
}
