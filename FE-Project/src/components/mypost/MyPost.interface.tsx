export interface MyRecuritment {
  id: number;
  category: String; // PROJECT, STUDY
  memberName: String; // 작성자 이름
  createdAt : String; // "yyyy-MM-dd'T'HH:mm:ss" 작성 시각
  title : String; // 제목
  deadline: String; // "yyyy-MM-dd'T'HH:mm:ss" 모집 종료 시각
  tech: []; // 기술 스택
  state : String; // 마감 여부 CLOSE, OPEN 
}

export interface MyPromotion {
  id: number;               	//게시물 번호
  createdAt: string;    //게시물 생성 날짜
  title: String;          //게시물 제목
  content: String;        //게시물 내용
  name: String;            //게시물 작성자
  abstractContent: String;  //게시물 요약내용
  likeCount: number;          //게시물 추천수
  likeStatus: boolean;     //게시물 추천상태
  view: number;               //게시물 조회수
}



export interface MyInfo {
  email: string;
  name: string;
  role: string;
}