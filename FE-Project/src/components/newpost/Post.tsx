import React, { useState } from "react";
import Progress from "./postform/Progress";
import Recruitment from "./postform/Recruitment";
import RecruitNumber from "./postform/RecruitNumber";

export default function Post() {
  const REQUIRED_DEFAULT_MESSAGE: string = "선택해주세요(필수)";
  const DEFAULT_MESSAGE: string = "선택해주세요";
  const [recruitment, setRecruitment] = useState<string>(
    REQUIRED_DEFAULT_MESSAGE
  );
  const [recruitNumber, setRecruitNumber] = useState<string>(
    REQUIRED_DEFAULT_MESSAGE
  );
  const [progress, setProgress] = useState<string>(DEFAULT_MESSAGE);
  return (
    <div className="post_wrapper">
      <div className="post_question">
        <span className="post_question_number">1</span>
        <span className="post_question_desc">
          프로젝트 기본 정보를 입력해주세요.
        </span>
      </div>
      <hr />
      <div className="post_form">
        <div className="post_select_form">
          <Recruitment
            recruitment={recruitment}
            setRecruitment={setRecruitment}
          />
          <RecruitNumber
            recruitNumber={recruitNumber}
            setRecruitNumber={setRecruitNumber}
          />
          <Progress progress={progress} setProgress={setProgress} />
        </div>
      </div>
    </div>
  );
}
