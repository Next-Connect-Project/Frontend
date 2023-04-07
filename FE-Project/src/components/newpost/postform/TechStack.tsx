import React from "react";
import MultiSelectForm from "../form/MultiSelectForm";
import { TechStackProps } from "../Post.intefact";
import { tech } from "./Tech.json";
export default function TechStack(props: TechStackProps) {
  const options = tech;

  return (
    <div>
      <div className="select_title">기술 스택</div>
      <MultiSelectForm
        default={props.default}
        options={options}
        data={props.tech}
        setData={props.setTech}
      />
    </div>
  );
}
