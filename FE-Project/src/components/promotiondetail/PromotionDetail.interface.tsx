export interface PromotionDetail {
  title: string;
  content: string;
  abstractContent: string;
  likeCount: number;
  likeStatus: boolean;
  view: number;
  name: string;
  createdAt: string;
  owner: boolean;
}

export interface LikeButtonProps {
  like: boolean;
  setLike: React.Dispatch<React.SetStateAction<boolean>>;
  likeCount: number | undefined;
  setLikeCount: React.Dispatch<React.SetStateAction<number>>;
  id: string | undefined;
}
