import { DetailOption } from "../components/newpost/Post.intefact";

export const getNextMonth = () => {
  const now = new Date();
  const next_month = new Date(now);
  next_month.setMonth(now.getMonth() + 1);

  return next_month;
};

export const ChangeMonthForm = (date:Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDay();
    const month_form = `${year}년 ${month}월 ${day}일`;

    return month_form;
}


//고른 기술스택 들을 
// export const SortingTech = (tech: DetailOption, value: string, option: string) => {
//     if(tech.value)
// }