import React, { useState } from "react";
import SelectAndInputForm from "../form/SelectAndInputForm";
import { ContactProps } from "../Post.intefact";

export default function Contact(props: ContactProps) {
  const options = [
    { value: "카카오톡(오픈카톡)" },
    { value: "이메일" },
    { value: "연락처" },
    { value: "기타" },
  ];
  const [select, setSelect] = useState<boolean>(false);
  return (
    <div>
      <div className="select_title">연락 방법</div>
      <SelectAndInputForm
        default={props.default}
        options={options}
        data={props.contact}
        setData={props.setContact}
        select={select}
        setSelect={setSelect}
      />
    </div>
  );
}
