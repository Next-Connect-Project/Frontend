import React from "react";
import InputForm from "../form/InputForm";
import { AbstractProps} from "../Post.intefact";

export default function Abstract(props: AbstractProps) {
  const example = "내 글을 더욱 쉽게 요약하는 방법을 소개합니다!";
  return (
    <div>
      <div className="input_title">홍보 요약 입력</div>
      <InputForm
        example={example}
        data={props.abstact}
        setData={props.setAbstract}
      />
    </div>
  );
}
