import axios from "axios";
import React, { useEffect, useState } from "react";
import { FindNewPostError } from "../../hooks/Error";
import NewPostModal from "../modal/NewPostModal";
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
  //Modal
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const onSubmitHandler =(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    //모달 만들기
    if (error !== 0) {
      setModalOpen(true);
    } else {
      console.log("에러없음");
      // api 연동
    }
  };

  useEffect(() => {
    if (modalOpen) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => { document.body.style.cssText = `position: fixed; `},700);
    } else {
      document.body.style.cssText = "";
    }
  }, [modalOpen]);

  useEffect(() => {
    setError(
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
        contact
      )
      );
  }, [
    title,
    recruitment,
    purpose,
    tech[0],
    tech.length,
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
  ]);
  
  return (
    <>
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
            <Contact
              default={REQUIRED_DEFAULT_MESSAGE}
              contact={contact}
              setContact={setContact}
            />
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
      {modalOpen ? (
        <NewPostModal
          setModalOpen={setModalOpen}
          error={error}
        />
      ) : null}
    </>
  );
}