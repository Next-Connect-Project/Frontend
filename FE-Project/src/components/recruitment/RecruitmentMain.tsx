import React, { useState } from "react";
import Filter from "./Filter";
import RecruitmentCardlist from "./RecruitmentCardlist";

export default function RecruitmentMain() {
  const [classification, setClassification] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  return (
    <div className="recruitment_wrapper">
      <Filter
        classification={classification}
        setClassification={setClassification}
        state={state}
        setState={setState}
        setPage={setPage}
      />
      <hr />
      <RecruitmentCardlist
        classification={classification}
        state={state}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}
