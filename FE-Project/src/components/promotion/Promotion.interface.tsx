export interface PromotionFilterProps {
  sort: number;
  setSort: React.Dispatch<React.SetStateAction<number>>;
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
}

export interface RecruitmentCardlistProps {
  sort: number;
  state: number;
}

export interface PagingProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  cards: number;
  totalcards: number;
}
