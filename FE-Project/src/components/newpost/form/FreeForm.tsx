import React from "react";
import MDEditor from "@uiw/react-md-editor";
import { FreeFormProps } from "../Post.intefact";

export default function FreeForm(props: FreeFormProps) {
  return (
    <div data-color-mode="light" className="free_form_input">
      <MDEditor height={600} value={props.data} onChange={props.setData} />
    </div>
  );
}
