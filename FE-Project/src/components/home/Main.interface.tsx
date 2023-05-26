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