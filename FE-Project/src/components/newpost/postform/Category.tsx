import React from "react";
import { CategoryProps } from "../Post.intefact";
import SelectForm from "../form/SelectForm";

export default function Category(props: CategoryProps) {
  const options = [
    { name: "스터디", value: "STUDY" },
    { name: "프로젝트", value: "PROJECT" },
  ];
  return (
    <div>
      <div className="select_title">모집 구분</div>
      <SelectForm
        options={options}
        data={props.category}
        setData={props.setCategory}
      />
    </div>
  );
}
