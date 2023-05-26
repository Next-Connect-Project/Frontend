export interface Card {
  id: number;
  category: string;
  classification: string;
  name: string;
  title: string;
  stack: string[];
  total: number;
  gathered: number;
  view: number;
  comment: number;
  state: string;
}

export interface MainCardProps {
  card: Card;
}
