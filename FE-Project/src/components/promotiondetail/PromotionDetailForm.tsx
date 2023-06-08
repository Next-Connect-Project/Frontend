import React, { useEffect, useState } from "react";
import LikeButton from "./LikeButton";
import { useNavigate, useParams } from "react-router-dom";
import PromotionDeleteModal from "../modal/PromotionDeleteModal";
import { useAppSelector } from "../../hooks/redux/store";
import { PromotionDetail } from "./PromotionDetail.interface";
import { ChangeMonthForm } from "../../hooks/Others";
import { getPromotionData } from "../../hooks/axios/Promotion";
import MDEditor from "@uiw/react-md-editor";
import { GrView } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function PromotionDetailForm() {
  const token = useAppSelector((state) => state.login);
  const [list, setList] = useState<PromotionDetail | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [created, setCreated] = useState<string | undefined>("");
  const [like, setLike] = useState<boolean>(false);
  const [likecount, setLikeCount] = useState<number>(0);
  const { id } = useParams();
  const navigate = useNavigate();

  /* 상세 홍보 글 조회 API */
  const getData = async (pageId: string | undefined) => {
    const detail = await getPromotionData(pageId, token.token);
    console.log(detail);
    if (detail.resultCode === 200) {
      setList(detail.response);
      setLike(detail.response.likeStatus);
      setLikeCount(detail.response.likeCount);
      if (detail.response.createdAt) {
        setCreated(ChangeMonthForm(new Date(detail.response.createdAt)));
      }
    } else {
      navigate('/NotFound');
    }
  };

  const ClickModalOpen = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setModalOpen(true);
  };

  useEffect(() => {
    getData(id);
  }, [id]);

  return (
    <div className="detail_wrapper">
      <section className="project_wrapper">
        <div className="project_header">
          <div className="project_title">{list?.title}</div>
          {list?.owner === true ? (
            <div className="project_owner_buttons">
              <Link to={`/promotionedit/${id}`} className="link">
                <div className="owner_button">수정</div>
              </Link>
              <div className="owner_button" onClick={ClickModalOpen}>
                삭제
              </div>
            </div>
          ) : null}
        </div>
        <div className="id_date">
          <div className="userid">{list?.name}</div>
          <div className="registered_date">{created}</div>
          <LikeButton
            like={like}
            setLike={setLike}
            likeCount={likecount}
            setLikeCount={setLikeCount}
            id={id}
          />
          <div>
            <GrView /> {list?.view}
          </div>
        </div>
        <ul className="project_info">
          <li className="projectinfo_wrapper">
            <span className="projectinfo_title">요약 내용</span>
            <span className="projectinfo_content">{list?.abstractContent}</span>
          </li>
        </ul>

        <div
          className="markdownDiv"
          data-color-mode="light"
          style={{ paddingTop: 30 }}
        >
          <MDEditor.Markdown source={list?.content} />
        </div>
      </section>
      {modalOpen ? (
        <PromotionDeleteModal setModalOpen={setModalOpen} id={id} />
      ) : null}
    </div>
  );
}
