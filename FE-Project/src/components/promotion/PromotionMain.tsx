import React, { useState } from "react";
import Filter from "./Filter";
import PromotionCardlist from "./PromotionCardlist";

export default function PromotionMain() {
  const [sort, setSort] = useState<number>(0);
  const [state, setState] = useState<number>(0);

  return (
    <div className="recruitment_wrapper">
      <Filter sort={sort} setSort={setSort} state={state} setState={setState} />
      <hr />
      <PromotionCardlist sort={sort} state={state} />
    </div>
  );
}
