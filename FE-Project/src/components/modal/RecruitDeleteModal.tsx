import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { DeleteModalProps } from "./Modal.interface";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux/store";
import { DeletePost } from "../../hooks/axios/Recruitment";
export default function RecruitDeleteModal({ setModalOpen, id }: DeleteModalProps) {
  const navigate = useNavigate();
  const token = useAppSelector((state) => state.login);
  const closeModal = () => {
    setModalOpen(false);
  };

  const ClickDeletePost = async() => {
    const result_data = await DeletePost(id, token.token);
    if (result_data.resultCode === 200) {
      navigate("/");
    }
  }
  return (
    <div className="modal_outside" onClick={closeModal}>
      <div className="modal_inside" onClick={(e) => e.stopPropagation()}>
        <div className="modal_top">
          <button className="modal_close_button" onClick={closeModal}>
            <IoCloseSharp />
          </button>
        </div>
        <hr />
        <div className="modal_bottom">게시글을 삭제 하시겠습니까?</div>
        <div className="modal_buttons">
          <div className="return_button" onClick={closeModal}>취소</div>
          <div className="delete_button" onClick={ClickDeletePost}>삭제</div>
        </div>
      </div>
    </div>
  );
}
