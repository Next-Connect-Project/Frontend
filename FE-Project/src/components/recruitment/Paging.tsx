import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { PagingProps } from "./Recruitment.interface";
export default function Paging({
  page,
  setPage,
  cards,
  totalcards,
}: PagingProps) {
  const [pageset, setPageset] = useState<number>(1);
  const lastPage = Math.ceil(totalcards / cards);

  const ClickPreviousButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (page % 5 === 1) {
      setPageset(pageset - 5);
    }
    setPage(page - 1);
  };

  const ClickNextButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (page % 5 === 0) {
      setPageset(pageset + 5);
    }
    setPage(page + 1);
  };

  const ClickNumberButton = (idx: number) => {
      setPage(pageset + idx);
      window.scrollTo(0, 0);
  };

  return (
    <div className="paging_wrapper">
      <button
        type="button"
        onClick={ClickPreviousButton}
        disabled={page === 1}
        className="button_arrow"
      >
        <FaAngleLeft />
      </button>

      {lastPage - pageset < 5
        ? Array(lastPage - pageset + 1)
            .fill(0)
            .map((_, idx) => (
              <button
                type="button"
                key={idx + 1}
                onClick={() => ClickNumberButton(idx)}
                className="button_number"
              >
                {idx + pageset}
              </button>
            ))
        : Array(5)
            .fill(0)
            .map((_, idx) => (
              <button
                type="button"
                key={idx + 1}
                onClick={() => ClickNumberButton(idx)}
                className="button_number"
              >
                {idx + pageset}
              </button>
            ))}
      <button
        type="button"
        onClick={ClickNextButton}
        disabled={page === lastPage}
        className="button_arrow"
      >
        <FaAngleRight />
      </button>
    </div>
  );
}
