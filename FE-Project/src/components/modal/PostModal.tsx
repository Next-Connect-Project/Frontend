import React from "react";
import { PostModalProps } from "./Modal.interface";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function PostModal({ setModalOpen }: PostModalProps) {
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="modal_outside" onClick={closeModal}>
      <div className="modal_inside" onClick={(e) => e.stopPropagation()}>
        <div className="modal_top">
          <button className="modal_close_button" onClick={closeModal}>
            <IoCloseSharp />
          </button>
        </div>
        <hr />
        <div className="modal_post_bottom">
          <Link to={"/recruitpost"} className="post_list">
            <div>모집하기</div>
          </Link>
          <Link to={"/promotionpost"} className="post_list">
            <div>홍보하기</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
