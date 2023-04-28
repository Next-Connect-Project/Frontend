import React from "react";
import { FilterProps } from "./Recruitment.interface";

export default function Filter(props: FilterProps) {
  //분류 Filter 0:ALL 1:PROJECT 2:STUDY
  const onClickStudy = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    props.classification === 2
      ? props.setClassification(0)
      : props.setClassification(2);
  };

  const onClickProject = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    props.classification === 1
      ? props.setClassification(0)
      : props.setClassification(1);
  };

  //상태 Filter 0:ALL 1:OPEN 2:CLOSE
  const onClickClose = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    props.state === 2 ? props.setState(0) : props.setState(2);
  };

  const onClickOpen = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    props.state === 1 ? props.setState(0) : props.setState(1);
  };

  return (
    <div className="filter_wrapper">
      <div>
        <div className="filter_title">분류</div>
        <div className="filter_desc">
          {props.classification === 0 ? (
            <>
              <div className="filter" onClick={onClickProject}>
                프로젝트
              </div>
              <div className="filter" onClick={onClickStudy}>
                스터디
              </div>
            </>
          ) : props.classification === 2 ? (
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
          {props.state === 0 ? (
            <>
              <div className="filter" onClick={onClickOpen}>
                진행중
              </div>
              <div className="filter" onClick={onClickClose}>
                모집완료
              </div>
            </>
          ) : props.state == 2 ? (
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
