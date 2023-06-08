export interface RecruitCardprops {
  id: number;
  category: string;
  classification: string;
  memberName: string;
  title: string;
  tech: string[];
  state: string;
  createdAt: string;
  deadline: string;
}

export interface PromotionCardprops {
  id: number;
  createdAt: string;
  name: string;
  title: string;
  abstractContent: string;
  likeCount: number;
  view: number;
  likeStatus: boolean;
}
