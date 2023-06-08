import React from "react";
import InputForm from "../form/InputForm";
import { PurposeProps } from "../Post.intefact";

export default function Purpose(props: PurposeProps) {
  const example = "꾸준히 코딩 하는 습관 가지기";
  return (
    <div>
      <div className="input_title">모임 목적</div>
      <InputForm
        example={example}
        data={props.purpose}
        setData={props.setPurpose}
      />
    </div>
  );
}
