import React from "react";
import CalendarForm from "../form/CalendarForm";
import { DeadlineProps } from "../Post.intefact";

export default function Deadline(props: DeadlineProps) {
  return (
    <div>
      <div className="select_title">모집 마감일</div>
      <CalendarForm data={props.deadline} setData={props.setDeadline} />
    </div>
  );
}
