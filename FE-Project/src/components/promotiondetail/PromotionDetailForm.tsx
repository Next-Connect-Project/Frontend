import React, { useEffect, useState } from "react";
import LikeButton from "./LikeButton";
import { useParams } from "react-router-dom";
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

  const getData = async (pageId: string | undefined) => {
    const detail = await getPromotionData(pageId, token.token);
    setList(detail);
    setLike(detail.likeStatus);
    setLikeCount(detail.likeCount);
    if (detail.createdAt) {
      setCreated(ChangeMonthForm(new Date(detail.createdAt)));
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
