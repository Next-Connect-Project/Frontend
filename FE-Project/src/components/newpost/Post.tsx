import axios from "axios";
import React, { useEffect, useState } from "react";
import { FindNewPostError } from "../../hooks/Error";
import Contact from "./postform/Contact";
import Deadline from "./postform/Deadline";
import Duration from "./postform/Duration";
import Introduce from "./postform/Introduce";
import Progress from "./postform/Progress";
import Purpose from "./postform/Purpose";
import Recruitment from "./postform/Recruitment";
import RecruitNumber from "./postform/RecruitNumber";
import TechStack from "./postform/TechStack";
import TimeAndPlace from "./postform/TimeAndPlace";
import Title from "./postform/Title";
import Way from "./postform/Way";

export default function Post() {
  const REQUIRED_DEFAULT_MESSAGE: string = "선택해주세요(필수)";
  const FREE_MESSAGE: any = "<h3>소개를 자유롭게 작성해주세요</h3>";
  //글제목
  const [title, setTitle] = useState<string>("");
  //모집구분
  const [recruitment, setRecruitment] = useState<string>(
    REQUIRED_DEFAULT_MESSAGE
  );
  //모임목적
  const [purpose, setPurpose] = useState<string>("");
  //기술스택
  const [tech, setTech] = useState<string[]>([REQUIRED_DEFAULT_MESSAGE]);
  //모집마감일
  const [deadline, setDeadline] = useState<Date | undefined>(undefined);

  //모집인원
  const [frontNumber, setFrontNumber] = useState<number>(0);
  const [backNumber, setBackNumber] = useState<number>(0);
  const [designNumber, setDesignNumber] = useState<number>(0);
  const [PMNumber, setPMNumber] = useState<number>(0);
  const [otherNumber, setOthernumber] = useState<number>(0);

  //진행방식
  const [progress, setProgress] = useState<string>(REQUIRED_DEFAULT_MESSAGE);
  //진행기간
  const [duration, setDuration] = useState<string>(REQUIRED_DEFAULT_MESSAGE);
  //모임시간 및 장소
  const [timeandplace, setTimeAndPlace] = useState<string>("");
  //진행 방법
  const [way, setWay] = useState<string>("");
  //연락 방법
  const [contact, setContact] = useState<string>(REQUIRED_DEFAULT_MESSAGE);
  //자유 기입
  const [free, setFree] = useState<any>(FREE_MESSAGE);
    //Error 체크
  const [error, setError] = useState<number>(0);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    FindNewPostError(
      REQUIRED_DEFAULT_MESSAGE,
      title,
      recruitment,
      purpose,
      tech,
      deadline,
      frontNumber,
      backNumber,
      designNumber,
      PMNumber,
      otherNumber,
      progress,
      duration,
      timeandplace,
      way,
      contact,
      setError
    );
    //모달 만들기
  };

  useEffect(() => {
    console.log("오류번호:" +error);    
  },[error])
  return (
    <form className="post_wrapper" onSubmit={onSubmitHandler}>
      <div className="post_question">
        <span className="post_question_number">1</span>
        <span className="post_question_desc">모임 제목을 입력해주세요.</span>
      </div>
      <hr />
      <div className="post_form">
        <div className="post_basic_form">
          <Title title={title} setTitle={setTitle} />
        </div>
      </div>
      <div className="post_question">
        <span className="post_question_number">2</span>
        <span className="post_question_desc">
          모임 기본 정보를 입력해주세요.
        </span>
      </div>
      <hr />
      <div className="post_form">
        <div className="post_basic_form">
          <Recruitment
            recruitment={recruitment}
            setRecruitment={setRecruitment}
          />
          <Purpose purpose={purpose} setPurpose={setPurpose} />
          <TechStack
            default={REQUIRED_DEFAULT_MESSAGE}
            tech={tech}
            setTech={setTech}
          />
          <Deadline deadline={deadline} setDeadline={setDeadline} />
          <RecruitNumber
            frontNumber={frontNumber}
            setFrontNumber={setFrontNumber}
            backNumber={backNumber}
            setBackNumber={setBackNumber}
            designNumber={designNumber}
            setDesignNumber={setDesignNumber}
            PMNumber={PMNumber}
            setPMNumber={setPMNumber}
            otherNumber={otherNumber}
            setOthernumber={setOthernumber}
          />
        </div>
      </div>
      <div className="post_question">
        <span className="post_question_number">3</span>
        <span className="post_question_desc">
          모임 진행 방식을 입력해주세요.
        </span>
      </div>
      <hr />
      <div className="post_form">
        <div className="post_basic_form">
          <Progress progress={progress} setProgress={setProgress} />
          <Duration duration={duration} setDuration={setDuration} />
          <TimeAndPlace
            timeandplace={timeandplace}
            setTimeAndPlace={setTimeAndPlace}
          />
          <Way way={way} setWay={setWay} />
        </div>
      </div>
      <div className="post_question">
        <span className="post_question_number">4</span>
        <span className="post_question_desc">연락 방법을 입력해주세요.</span>
      </div>
      <hr />
      <div className="post_form">
        <div className="post_basic_form">
          <Contact default={REQUIRED_DEFAULT_MESSAGE } contact={contact} setContact={setContact} />
        </div>
      </div>
      <div className="post_question">
        <span className="post_question_number">5</span>
        <span className="post_question_desc">
          모임 소개를 자유롭게 기입해주세요.
        </span>
      </div>
      <hr />
      <div className="post_form free_form">
        <div className="post_basic_form">
          <Introduce free={free} setFree={setFree} />
        </div>
      </div>
      <div className="submit_button_wrapper">
        <button type="submit" className="btn btn-primary submit_button">
          {" "}
          작성하기{" "}
        </button>
      </div>
    </form>
  );
}

// 1. 제목
// -제목입력 input ,string O
// ============================
// 2.기본 정보
// - 모집구분 Select (스터디, 프로젝트), string O
// - 프로젝트/스터디 목적 input (ex. 알고리즘 실력을 기르자), sting O
// - 사용기술스택 Select (상위, 하위), string[] O
// - 모집인원 Checkbox + input , number O
// - 모집마감 Calendar ,date O 필
// ============================
// 3. 진행 관련
// - 진행방식 Select (온라인, 오프라인), string O
// - 진행기간 Select (1개월, 2개월 ...), string O
// - 진행시간 및 장소 input, string O
// - 진행 방법 상세(ex. 매일 알고리즘 1문제 식 풀고 깃허브에 올리기) input, string O
// ============================
//  4.연락 관련
// - 대분류 Select (이메일, 카카오톡, 전화번호, 오픈채팅 및 링크), string O
// - 연락상세 input, string O
// ============필수아님=============
// 5.프로젝트 소개
// - 자유입력 , input, string O
