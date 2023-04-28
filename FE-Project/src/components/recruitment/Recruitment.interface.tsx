export interface FilterProps {
  classification: number;
  setClassification: React.Dispatch<React.SetStateAction<number>>;
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
}

export interface RecruitmentCardlistProps {
  classification: number;
  state: number;
}

export interface PagingProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
    cards: number;
    totalcards: number;
}
