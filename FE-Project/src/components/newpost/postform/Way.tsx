import React from 'react'
import InputForm from '../form/InputForm';
import { WayProps } from '../Post.intefact';

export default function Way(props:WayProps) {
  const example = "일주일 간 코딩하며 공부한 것 공유 및 피드백";
  return (
    <div>
      <div className="input_title">진행 방법</div>
      <InputForm
        example={example}
        data={props.way}
        setData={props.setWay}
      />
    </div>
  );
}
