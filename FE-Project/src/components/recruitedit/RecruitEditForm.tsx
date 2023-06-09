import React, { useEffect, useState } from "react";
import { FindNewPostError } from "../../hooks/Error";
import NewPostModal from "../modal/NewPostModal";
import Contact from "../newpost/postform/Contact";
import Deadline from "../newpost/postform/Deadline";
import Duration from "../newpost/postform/Duration";
import Introduce from "../newpost/postform/Introduce";
import Progress from "../newpost/postform/Progress";
import Purpose from "../newpost/postform/Purpose";
import Category from "../newpost/postform/Category";
import RecruitNumber from "../newpost/postform/RecruitNumber";
import TechStack from "../newpost/postform/TechStack";
import TimeAndPlace from "../newpost/postform/TimeAndPlace";
import Title from "../newpost/postform/Title";
import Way from "../newpost/postform/Way";
import { useNavigate, useParams } from "react-router-dom";
import {
  EditRecruitPost,
  getRecruitmentData,
} from "../../hooks/axios/Recruitment";
import { useAppSelector } from "../../hooks/redux/store";

export default function RecruitEditForm() {
  const { id } = useParams<{ id: string }>();
  const token = useAppSelector((state) => state.login);
  const navigate = useNavigate();
  const REQUIRED_DEFAULT_MESSAGE: string = "선택해주세요(필수)";
  const FREE_MESSAGE: any = "<h3>소개를 자유롭게 작성해주세요!!!!</h3>";
  //글제목
  const [title, setTitle] = useState<string>("");
  //모집구분
  const [category, setCategory] = useState<string>(REQUIRED_DEFAULT_MESSAGE);
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
  const [pmNumber, setPmNumber] = useState<number>(0);
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

  /* 모집글 상세조회 API */
  const getData = async () => {
    const detail = await getRecruitmentData(id, token.token);
    if (detail.resultCode === 200) {
      setTitle(detail.response.title);
      setCategory(detail.response.category);
      setPurpose(detail.response.required.purpose);
      setTech(detail.response.tech);
      setDeadline(new Date(detail.response.deadline));
      setFrontNumber(detail.response.personnel.frontNumber);
      setBackNumber(detail.response.personnel.backNumber);
      setDesignNumber(detail.response.personnel.designNumber);
      setPmNumber(detail.response.personnel.pmNumber);
      setOthernumber(detail.response.personnel.otherNumber);
      setProgress(detail.response.required.progress);
      setDuration(detail.response.required.duration);
      setTimeAndPlace(detail.response.required.timeandplace);
      setWay(detail.response.required.way);
      setContact(detail.response.required.contact);
      setFree(detail.response.free);
    } else {
      navigate("/NotFound");
    }
  };

  /* 모집글 수정 API */
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (error !== 0) {
      setModalOpen(true);
    } else {
      // api 연동
      let edit_result = await EditRecruitPost(
        id,
        token.token,
        category,
        title,
        deadline,
        backNumber,
        frontNumber,
        designNumber,
        pmNumber,
        otherNumber,
        tech,
        purpose,
        timeandplace,
        duration,
        way,
        progress,
        contact,
        free
      );
      if (edit_result.resultCode === 200) {
        navigate(`/recruit/${id}`);
      }
    }
  };

  /* 처음 수정 페이지 렌더링 후 기존 입력 데이터 Get */
  useEffect(() => {
    getData();
  }, []);

  /* 항목 입력할때 마다 오류 체크 */
  useEffect(() => {
    setError(
      FindNewPostError(
        REQUIRED_DEFAULT_MESSAGE,
        title,
        category,
        purpose,
        tech,
        deadline,
        frontNumber,
        backNumber,
        designNumber,
        pmNumber,
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
    category,
    purpose,
    tech[0],
    tech.length,
    deadline,
    frontNumber,
    backNumber,
    designNumber,
    pmNumber,
    otherNumber,
    progress,
    duration,
    timeandplace,
    way,
    contact,
  ]);

  /* 모달 오픈시 화면 최상단 이동 */
  useEffect(() => {
    if (modalOpen) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        document.body.style.cssText = `position: fixed; `;
      }, 700);
    } else {
      document.body.style.cssText = "";
    }
  }, [modalOpen]);

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
            모임 기본 정보를 입력해주세요
          </span>
        </div>
        <hr />
        <div className="post_form">
          <div className="post_basic_form">
            <Category category={category} setCategory={setCategory} />
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
              pmNumber={pmNumber}
              setPmNumber={setPmNumber}
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
            수정하기
          </button>
        </div>
      </form>
      {modalOpen ? (
        <NewPostModal setModalOpen={setModalOpen} error={error} />
      ) : null}
    </>
  );
}
