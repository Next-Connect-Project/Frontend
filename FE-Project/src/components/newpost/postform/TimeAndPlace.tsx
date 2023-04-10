import React from 'react'
import InputForm from '../form/InputForm';
import { TimeAndPlaceProps } from '../Post.intefact';

export default function TimeAndPlace(props:TimeAndPlaceProps) {
  const example = "매주 목요일 13시, 강남역 앞 스타벅스 강남R점 ";
  return (
    <div>
      <div className="input_title">모임 시간 및 장소</div>
      <InputForm
        example={example}
        data={props.timeandplace}
        setData={props.setTimeAndPlace}
      />
    </div>
  );
}
