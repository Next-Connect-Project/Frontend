import React from "react";
import { ModalProps } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import { PrintError } from "../../hooks/Error";
export default function NewPostModal({ setModalOpen, error }: ModalProps) {
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
        <hr/>
        <div className="modal_bottom">{PrintError(error)}</div>
      </div>
    </div>
  );
}
