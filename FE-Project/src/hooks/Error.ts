export const FindNewPostError = (
  REQUIRED_DEFAULT_MESSAGE:string,
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
  contact: string,
  setError: React.Dispatch<React.SetStateAction<number>>
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
        setError(1);
    } else if (recruitment === REQUIRED_DEFAULT_MESSAGE) {
        setError(2);
    } else if (purpose === "") {
        setError(3);
    } else if (tech[0] === REQUIRED_DEFAULT_MESSAGE) {
        setError(4);
    } else if (deadline === undefined) {
        setError(5);
    } else if (frontNumber + backNumber + designNumber + PMNumber + otherNumber === 0) {
        setError(6);
    } else if (progress === REQUIRED_DEFAULT_MESSAGE) {
        setError(7);
    } else if (duration === REQUIRED_DEFAULT_MESSAGE) {
        setError(8);
    } else if (timeandplace === "") {
        setError(9);
    } else if (way === "") {
        setError(10);
    } else if (contact === REQUIRED_DEFAULT_MESSAGE) {
        setError(11);
    } else {
        setError(0);
    }
};
