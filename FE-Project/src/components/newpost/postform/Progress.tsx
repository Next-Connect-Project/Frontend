import React from "react";
import SelectForm from "../form/SelectForm";
import { ProgressProps } from "../Post.intefact";

export default function Progress(props: ProgressProps) {
  const options = [
    { value: "온라인", name: "온라인" },
    { value: "오프라인", name: "오프라인" },
  ];
  return (
    <div>
      <div className="select_title">진행 방식</div>
      <SelectForm
        options={options}
        data={props.progress}
        setData={props.setProgress}
      />
    </div>
  );
}
