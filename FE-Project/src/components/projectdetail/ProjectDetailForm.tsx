import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Detail } from "./ProjectDetail.interface";
import MDEditor from "@uiw/react-md-editor";
import { getRecruitmentData } from "../../hooks/axios/Recruitment";
import { useAppSelector } from "../../hooks/redux/store";

export default function ProjectDetailForm() {
  const navigate = useNavigate();
  const token = useAppSelector((state) => state.login);
  const [list, setList] = useState<Detail | null>(null);
  const { id } = useParams();

  const getData = async (pageId: string | undefined) => {
    const detail = await getRecruitmentData(pageId, token.token);
    setList(detail);
    console.log(detail);
  };

  useEffect(() => {
    getData(id);
  }, [id]);

  //   const handleEdit = () => {
  //     const selectedElement = list.find((element) => element.id === Number(id));
  //     if (selectedElement) {
  //       navigate(`/edit/${selectedElement.id}`);
  //     } else {
  //       console.error("Selected element not found!");
  //     }
  //   };

  return (
    <div className="detail_wrapper">
      <section className="project_wrapper">
        <div className="project_header">
          <div className="project_title">{list?.title}</div>
          {list?.owner === true ? (
            <div className="project_owner_buttons">
              <div className="owner_button">수정</div>
              <div className="owner_button">삭제</div>
            </div>
          ) : null}
        </div>
        <div className="id_date">
          <div className="userid">{list?.memberName}</div>
          <div className="registered_date">{list?.createdAt}</div>
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
            <span className="projectinfo_content">{list?.deadline}</span>
          </li>

          <li className="projectinfo_wrapper">
            <span className="projectinfo_title">모집 인원</span>
            <div className="projectinfo_content">
              <span>Front-End: {list?.personnel.frontNumber}</span> &nbsp;
              <span>Back-End: {list?.personnel.backNumber}</span>
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
    </div>
  );
}
