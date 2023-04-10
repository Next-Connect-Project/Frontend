import React from 'react'
import InputForm from '../form/InputForm';
import { TitleProps } from '../Post.intefact';

export default function Title(props:TitleProps) {
    const example = "[NextConnect] 모각코 스터디 인원모집!!";
  return (
    <div>
      <div className="input_title">제목 입력</div>
          <InputForm example={example} data={props.title} setData={props.setTitle} />
    </div>
  );
}
