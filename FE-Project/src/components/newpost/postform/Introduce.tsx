import React from "react";
import FreeForm from "../form/FreeForm";
import { IntroduceProps } from "../Post.intefact";

export default function Introduce(props: IntroduceProps) {
  return (
    <>
      <FreeForm data={props.free} setData={props.setFree} />
    </>
  );
}
