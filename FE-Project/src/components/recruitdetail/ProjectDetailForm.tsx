import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Detail } from "./ProjectDetail.interface";
import MDEditor from "@uiw/react-md-editor";
import { getRecruitmentData } from "../../hooks/axios/Recruitment";
import { useAppSelector } from "../../hooks/redux/store";
import StateButton from "./StateButton";
import { ChangeMonthForm } from "../../hooks/Others";
import RecruitDeleteModal from "../modal/RecruitDeleteModal";

export default function ProjectDetailForm() {
  const token = useAppSelector((state) => state.login);
  const [list, setList] = useState<Detail | null>(null);
  const [state, setState] = useState<string>("OPEN");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [created, setCreated] = useState<string | undefined>("");
  const [endDate, setEndDate] = useState<string | undefined>("");
  const { id } = useParams();
  const navigate = useNavigate();

  /* 모집글 상세조회 API */
  const getData = async (pageId: string | undefined) => {
    const detail = await getRecruitmentData(pageId, token.token);
    if (detail.resultCode === 200) {
      setList(detail.response);
      setState(detail.response.state);
      if (detail.response.createdAt) {
        setCreated(ChangeMonthForm(new Date(detail.response.createdAt)));
      }
      if (detail.response.deadline) {
        setEndDate(ChangeMonthForm(new Date(detail.response.deadline)));
      }   
    } else {
      navigate('/NotFound');
    }
  };

  useEffect(() => {
    getData(id);
  }, [id]);

  const ClickModalOpen = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setModalOpen(true);
  };

  return (
    <div className="detail_wrapper">
      <section className="project_wrapper">
        <div className="project_header">
          <div className="project_title">{list?.title}</div>
          {list?.owner === true ? (
            <div className="project_owner_buttons">
              <StateButton state={state} setState={setState} id={id} />
              <Link to={`/recruitedit/${id}`} className="link">
                <div className="owner_button">수정</div>
              </Link>
              <div className="owner_button" onClick={ClickModalOpen}>
                삭제
              </div>
            </div>
          ) : null}
        </div>
        <div className="id_date">
          <div className="userid">{list?.memberName}</div>
          {created === "" ? null : (
            <div className="registered_date">{created}</div>
          )}
        </div>
        <ul className="project_info">
          <li className="projectinfo_wrapper">
            <span className="projectinfo_title">모집 구분</span>
            <span className="projectinfo_content">{list?.category}</span>
          </li>

          <li className="projectinfo_wrapper">
            <span className="projectinfo_title">모임 목적</span>
            <span className="projectinfo_content">
              {list?.required.purpose}
            </span>
          </li>

          <li className="projectinfo_wrapper">
            <span className="projectinfo_title">기술 스택</span>
            <span className="projectinfo_content">{list?.tech.join(", ")}</span>
          </li>

          <li className="projectinfo_wrapper">
            <span className="projectinfo_title">모집 마감</span>
            <span className="projectinfo_content">{endDate}</span>
          </li>

          <li className="projectinfo_wrapper">
            <span className="projectinfo_title">모집 인원</span>
            <div className="projectinfo_content">
              <span>Front-End: {list?.personnel.frontNumber}</span> &nbsp;
              <span>Back-End: {list?.personnel.backNumber}</span> &nbsp;
              <span>Designer: {list?.personnel.designNumber}</span> &nbsp;
              <span>PM: {list?.personnel.pmNumber}</span> &nbsp;
              <span>기타: {list?.personnel.otherNumber}</span>
            </div>
          </li>

          <li className="projectinfo_wrapper">
            <span className="projectinfo_title">진행 방식</span>
            <span className="projectinfo_content">
              {list?.required.progress}
            </span>
          </li>

          <li className="projectinfo_wrapper">
            <span className="projectinfo_title">진행 기간</span>
            <span className="projectinfo_content">
              {list?.required.duration}
            </span>
          </li>

          <li className="projectinfo_wrapper">
            <span className="projectinfo_title">모임 일정</span>
            <span className="projectinfo_content">
              {list?.required.timeandplace}
            </span>
          </li>

          <li className="projectinfo_wrapper">
            <span className="projectinfo_title">진행 방법</span>
            <span className="projectinfo_content">{list?.required.way}</span>
          </li>

          <li className="projectinfo_wrapper">
            <span className="projectinfo_title">연락 방법</span>
            <span className="projectinfo_content">
              {list?.required.contact}
            </span>
          </li>
        </ul>
        <div
          className="markdownDiv"
          data-color-mode="light"
          style={{ paddingTop: 30 }}
        >
          <MDEditor.Markdown source={list?.free} />
        </div>
      </section>
      {modalOpen ? <RecruitDeleteModal setModalOpen={setModalOpen} id={id} /> : null}
    </div>
  );
}
