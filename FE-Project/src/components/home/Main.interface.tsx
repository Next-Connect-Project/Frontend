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
}

export interface MainCardProps{
    card: Card;
}

export interface PromotionCard {
  id: number;
  date: string;
  name: string;
  title: string;
  summary: string;
  recommend: number;
}

export interface MainPromotionCardProps{
    card: PromotionCard;
}