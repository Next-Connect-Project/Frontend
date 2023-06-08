import React from "react";
import { CalendarProps } from "../Post.intefact";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";

export default function CalendarForm(props: CalendarProps) {
  const onSelectDateHandler = (date: Date | null) => {
    date ? props.setData(date) : null;
  };

  return (
    <div>
      <DatePicker
        className="calendar_form"
        onChange={(date) => onSelectDateHandler(date)}
        selected={props.data}
        placeholderText="모집 마감일 선택(필수)"
        dateFormat="yyyy년 MM월 dd일"
        locale={ko}
        minDate={new Date()}
      />
    </div>
  );
}
