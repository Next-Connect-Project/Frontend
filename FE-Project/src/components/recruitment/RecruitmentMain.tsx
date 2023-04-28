import React, { useState } from "react";
import Filter from "./Filter";
import RecruitmentCardlist from "./RecruitmentCardlist";

export default function RecruitmentMain() {
  const [classification, setClassification] = useState<number>(0);
  const [state, setState] = useState<number>(0);

  return (
    <div className="recruitment_wrapper">
      <Filter
        classification={classification}
        setClassification={setClassification}
        state={state}
        setState={setState}
      />
      <hr />
      <RecruitmentCardlist classification={classification} state={state} />
    </div>
  );
}
