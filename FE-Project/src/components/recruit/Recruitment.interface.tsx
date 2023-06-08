export interface FilterProps {
  classification: string;
  setClassification: React.Dispatch<React.SetStateAction<string>>;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export interface RecruitmentCardlistProps {
  classification: string;
  state: string;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export interface PagingProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  cards: number;
  totalcards: number;
}
