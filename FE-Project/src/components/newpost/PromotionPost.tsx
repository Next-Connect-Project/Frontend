import React, { useEffect, useState } from "react";
import Title from "./postform/Title";
import Introduce from "./postform/Introduce";
import NewPostModal from "../modal/NewPostModal";
import Abstract from "./postform/Abstract";
import { FindNewPromotionPostError } from "../../hooks/Error";
import { useAppSelector } from "../../hooks/redux/store";
import { PostPromotion } from "../../hooks/axios/Post";
import { useNavigate } from "react-router-dom";

export default function PromotionPost() {
  const navigate = useNavigate();
  const token = useAppSelector((state) => state.login);

  const [title, setTitle] = useState<string>("");
  const [abstact, setAbstract] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [error, setError] = useState<number>(0);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (error !== 0) {
      setModalOpen(true);
    } else {
      let submit_result = await PostPromotion(
        title,
        content,
        abstact,
        token.token
      );
      console.log(submit_result);
      if (submit_result.data.resultCode == 200) {
        navigate("/");
      }
    }
  };

  useEffect(() => {
    setError(FindNewPromotionPostError(title, abstact, content));
  }, [title, abstact, content]);

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
