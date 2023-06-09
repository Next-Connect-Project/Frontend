import React from "react";
import { RecruitNumberProps } from "../Post.intefact";
import CheckForm from "../form/CheckForm";

export default function RecruitNumber(props: RecruitNumberProps) {
  const options = [
    { value: "FrontEnd", name: "Front-End" },
    { value: "BackEnd", name: "Back-End" },
    { value: "Design", name: "Design" },
    { value: "ProjectManager", name: "PM" },
    { value: "Others", name: "기타" },
  ];

  return (
    <div>
      <div className="checkbox_title">모집 인원</div>
      <div className="checkbox_form">
        {options.map((data) => {
          return (
            <CheckForm
              key={data.value}
              option={data.value}
              name={data.name}
              frontNumber={props.frontNumber}
              setFrontNumber={props.setFrontNumber}
              backNumber={props.backNumber}
              setBackNumber={props.setBackNumber}
              designNumber={props.designNumber}
              setDesignNumber={props.setDesignNumber}
              pmNumber={props.pmNumber}
              setPmNumber={props.setPmNumber}
              otherNumber={props.otherNumber}
              setOthernumber={props.setOthernumber}
            />
          );
        })}
      </div>
    </div>
  );
}
