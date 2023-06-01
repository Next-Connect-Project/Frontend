export interface Mypostprops {
  id: number;
  category: String; // PROJECT, STUDY
  memberName: String; // 작성자 이름
  createdAt : String; // "yyyy-MM-dd'T'HH:mm:ss" 작성 시각
  title : String; // 제목
  deadline: String; // "yyyy-MM-dd'T'HH:mm:ss" 모집 종료 시각
  tech: []; // 기술 스택
  state : String; // 마감 여부 CLOSE, OPEN
}
