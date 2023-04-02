import React from "react";
import { RecruitmentProps, RecruitNumberProps } from "../Post.intefact";
import SelectForm from "./SelectForm";

export default function RecruitNumber(props:RecruitNumberProps) {
  const options = [
    { value: "인원 미정" },
    { value: "1명" },
    { value: "2명" },
    { value: "3명" },
    { value: "4명" },
    { value: "5명" },
    { value: "6명" },
    { value: "7명" },
    { value: "8명" },
    { value: "9명" },
    { value: "10명" },
    { value: "무제한" },
  ];
  return (
    <div>
      <div className="select_title">모집 인원</div>
      <SelectForm
        options={options}
        data={props.recruitNumber}
        setData={props.setRecruitNumber}
      />
    </div>
  );
}
