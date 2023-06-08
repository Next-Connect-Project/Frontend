import React, { useState } from "react";
import Filter from "./Filter";
import PromotionCardlist from "./PromotionCardlist";

export default function PromotionMain() {
  const [sort, setSort] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  
  return (
    <div className="recruitment_wrapper">
      <Filter sort={sort} setSort={setSort} setPage={setPage} />
      <hr />
      <PromotionCardlist sort={sort} page={page} setPage={setPage} />
    </div>
  );
}
