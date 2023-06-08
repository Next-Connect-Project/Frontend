export const FindNewPostError = (
  REQUIRED_DEFAULT_MESSAGE: string,
  title: string,
  recruitment: string,
  purpose: string,
  tech: string[],
  deadline: Date | undefined,
  frontNumber: number,
  backNumber: number,
  designNumber: number,
  PMNumber: number,
  otherNumber: number,
  progress: string,
  duration: string,
  timeandplace: string,
  way: string,
  contact: string
) => {
  /* Error 명세
    0: 오류 없음
    1: 제목 입력 안함
    2: 모집구분 선택 안함
    3: 모임 목적 입력 안함
    4: 기술 스택 선택 안함
    5: 모집 마감일 선택 안함
    6: 모집인원 합이 0임
    7: 진행방식 선택 안함
    8: 진행기간 선택 안함
    9: 모임 시간 및 장소 입력 안함
    10: 진행 방법 입력 안함
    11: 연락 방법 선택/입력 안함
    */
  if (title === "") {
    return 1;
  } else if (recruitment === REQUIRED_DEFAULT_MESSAGE) {
    return 2;
  } else if (purpose === "") {
    return 3;
  } else if (tech[0] === REQUIRED_DEFAULT_MESSAGE) {
    console.log(tech[0]);
    return 4;
  } else if (deadline === undefined) {
    return 5;
  } else if (
    frontNumber + backNumber + designNumber + PMNumber + otherNumber ===
    0
  ) {
    return 6;
  } else if (progress === REQUIRED_DEFAULT_MESSAGE) {
    return 7;
  } else if (duration === REQUIRED_DEFAULT_MESSAGE) {
    return 8;
  } else if (timeandplace === "") {
    return 9;
  } else if (way === "") {
    return 10;
  } else if (contact === REQUIRED_DEFAULT_MESSAGE) {
    return 11;
  } else {
    return 0;
  }
};

export const FindNewPromotionPostError = (
  title: string,
  abstract: string,
  content: string
) => {
  /* Error 명세
    0: 오류 없음
    1: 제목 입력 안함
    12: 요약 입력 안함
    13: 요약 50글자 초과
    14: 홍보내용 입력 안함
    */
  if (title === "") {
    return 1;
  } else if (abstract === "") {
    return 12;
  } else if (abstract.length > 50) {
    return 13;
  } else if (content === "") {
    return 14;
  } else {
    return 0;
  }
};

export const PrintError = (error: number) => {
  if (error === 1) {
    return "제목 입력 항목을 입력 해주세요.";
  } else if (error === 2) {
    return "모집 구분을 선택 해주세요.";
  } else if (error === 3) {
    return "모임 목적 항목을 입력 해주세요.";
  } else if (error === 4) {
    return "기술 스택을 한가지 이상 선택 해주세요.";
  } else if (error === 5) {
    return "모집 마감일을 선택 해주세요.";
  } else if (error === 6) {
    return "모집인원은 총합 1명 이상 이어야 합니다.";
  } else if (error === 7) {
    return "진행 방식을 선택 해주세요.";
  } else if (error === 8) {
    return "진행 기간을 선택 해주세요.";
  } else if (error === 9) {
    return "모임 시간 및 장소를 입력 해주세요.";
  } else if (error === 10) {
    return "진행 방법을 입력 해주세요.";
  } else if (error === 11) {
    return "연락 방법을 입력해주세요.";
  } else if (error === 12) {
    return "홍보 요약 입력 항목을 입력해주세요.";
  } else if (error === 13) {
    return "홍보 요약 입력 항목의 내용이 50글자를 초과하였습니다.";
  } else if (error === 14) {
    return "홍보 내용을 입력해주세요.";
  } else {
    return "확인되지 않은 오류 입니다. 관리자에게 문의해주세요.";
  }
};
