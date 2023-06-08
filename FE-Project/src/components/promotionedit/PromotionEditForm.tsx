import React, { useEffect, useState } from "react";
import { FindNewPromotionPostError } from "../../hooks/Error";
import { useAppSelector } from "../../hooks/redux/store";
import { useNavigate, useParams } from "react-router-dom";
import Title from "../newpost/postform/Title";
import Abstract from "../newpost/postform/Abstract";
import Introduce from "../newpost/postform/Introduce";
import NewPostModal from "../modal/NewPostModal";
import {
  EditPromotionPost,
  getPromotionData,
} from "../../hooks/axios/Promotion";

export default function PromotionEditForm() {
  const token = useAppSelector((state) => state.login);
  const [title, setTitle] = useState<string>("");
  const [abstact, setAbstract] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [error, setError] = useState<number>(0);

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  /* 상세 홍보글 조회 API */
  const getData = async () => {
    const detail = await getPromotionData(id, token.token);
    if (detail.resultCode === 200) {
      setTitle(detail.response.title);
      setContent(detail.response.content);
      setAbstract(detail.response.abstractContent);
    } else {
      navigate("/NotFound");
    }
  };

  /* 홍보 글 수정 API */
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (error !== 0) {
      setModalOpen(true);
    } else {
      let edit_result = await EditPromotionPost(
        id,
        token.token,
        title,
        content,
        abstact
      );
      if (edit_result.resultCode === 200) {
        navigate("/");
      }
    }
  };

  /* 처음 수정 페이지 렌더링 후 기존 입력 데이터 Get */
  useEffect(() => {
    getData();
  }, []);

  /* 항목 입력시 모다 오류 체크 */
  useEffect(() => {
    setError(FindNewPromotionPostError(title, abstact, content));
  }, [title, abstact, content]);

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
          <span className="post_question_desc">
            알리고 싶은 프로젝트 제목을 입력해주세요.
          </span>
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
            홍보내용을 50글자 이내로 간단하게 요약하여 주세요.
          </span>
        </div>
        <hr />
        <div className="post_form free_form">
          <div className="post_basic_form">
            <Abstract abstact={abstact} setAbstract={setAbstract} />
          </div>
        </div>
        <div className="post_question">
          <span className="post_question_number">3</span>
          <span className="post_question_desc">
            홍보하고 싶은 내용을 자유롭게 기입하여 주세요.
          </span>
        </div>
        <hr />
        <div className="post_form free_form">
          <div className="post_basic_form">
            <Introduce free={content} setFree={setContent} />
          </div>
        </div>
        <div className="submit_button_wrapper">
          <button type="submit" className="btn btn-primary submit_button">
            작성하기
          </button>
        </div>
      </form>
      {modalOpen ? (
        <NewPostModal setModalOpen={setModalOpen} error={error} />
      ) : null}
    </>
  );
}
