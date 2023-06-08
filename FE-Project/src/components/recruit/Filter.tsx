import React from "react";
import { FilterProps } from "./Recruitment.interface";

export default function Filter(props: FilterProps) {
  /* 분류 Filter 0:ALL 1:PROJECT 2:STUDY */
  const onClickStudy = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    props.setPage(1);
    props.classification === "STUDY"
      ? props.setClassification("")
      : props.setClassification("STUDY");
  };

  const onClickProject = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    props.setPage(1);
    props.classification === "PROJECT"
      ? props.setClassification("")
      : props.setClassification("PROJECT");
  };

  /* 상태 Filter 0:ALL 1:OPEN 2:CLOSE */
  const onClickClose = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    props.setPage(1);
    props.state === "CLOSE" ? props.setState("") : props.setState("CLOSE");
  };

  const onClickOpen = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    props.setPage(1);
    props.state === "OPEN" ? props.setState("") : props.setState("OPEN");
  };

  return (
    <div className="filter_wrapper">
      <div>
        <div className="filter_title">분류</div>
        <div className="filter_desc">
          {props.classification === "" ? (
            <>
              <div className="filter" onClick={onClickProject}>
                프로젝트
              </div>
              <div className="filter" onClick={onClickStudy}>
                스터디
              </div>
            </>
          ) : props.classification === "STUDY" ? (
            <>
              <div className="filter" onClick={onClickProject}>
                프로젝트
              </div>
              <div className="filter_selected" onClick={onClickStudy}>
                스터디
              </div>
            </>
          ) : (
            <>
              <div className="filter_selected" onClick={onClickProject}>
                프로젝트
              </div>
              <div className="filter" onClick={onClickStudy}>
                스터디
              </div>
            </>
          )}
        </div>
      </div>
      <div>
        <div className="filter_title">상태</div>
        <div className="filter_desc">
          {props.state === "" ? (
            <>
              <div className="filter" onClick={onClickOpen}>
                진행중
              </div>
              <div className="filter" onClick={onClickClose}>
                모집완료
              </div>
            </>
          ) : props.state == "CLOSE" ? (
            <>
              <div className="filter" onClick={onClickOpen}>
                진행중
              </div>
              <div className="filter_selected" onClick={onClickClose}>
                모집완료
              </div>
            </>
          ) : (
            <>
              <div className="filter_selected" onClick={onClickOpen}>
                진행중
              </div>
              <div className="filter" onClick={onClickClose}>
                모집완료
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
