import React from "react";
import { RecruitmentProps } from "../Post.intefact";
import SelectForm from "./SelectForm";

export default function Recruitment( props :RecruitmentProps) {
    const options = [{value: "스터디"}, {value: "프로젝트"}];
  return (
    <div>
      <div className="select_title">모집 구분</div>
          <SelectForm options={options} data={props.recruitment} setData={props.setRecruitment} />
    </div>
  );
}
