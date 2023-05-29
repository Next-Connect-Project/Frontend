import React from "react";
import SelectForm from "../form/SelectForm";
import { DurationProps } from "../Post.intefact";

export default function Duration(props: DurationProps) {
  const options = [
    { value: "기간 미정", name: "기간 미정" },
    { value: "1개월", name: "1개월" },
    { value: "2개월", name: "2개월" },
    { value: "3개월", name: "3개월" },
    { value: "4개월", name: "4개월" },
    { value: "5개월", name: "5개월" },
    { value: "6개월 이상", name: "6개월" },
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
