import React from "react";
import SelectForm from "../form/SelectForm";
import { DurationProps } from "../Post.intefact";

export default function Duration(props: DurationProps) {
  const options = [
    { value: "기간 미정" },
    { value: "1개월" },
    { value: "2개월" },
    { value: "3개월" },
    { value: "4개월" },
    { value: "5개월" },
    { value: "6개월 이상" },
  ];
  return (
    <div>
      <div className="select_title">진행 기간</div>
      <SelectForm
        options={options}
        data={props.duration}
        setData={props.setDuration}
      />
    </div>
  );
}
