import axios from "axios";

export const RequestNaverLogin = async (code: string) => {
  const url = `http://ec2-13-209-222-139.ap-northeast-2.compute.amazonaws.com:8080/api/auth/login/naver`;
  return await axios
    .post(url, { code: code }, { withCredentials: true })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((e) => {
      console.log(e);
    });
};

export const RequestAccessToken = async (accessToken: string) => {
  const url = `http://ec2-13-209-222-139.ap-northeast-2.compute.amazonaws.com:8080/api/auth/reissue`;
  return await axios
    .get(url, {
      headers: {
        Authorization: accessToken,
      },
      withCredentials: true,
    })
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log(e);
    });
};

//1. 첫로그인 시 refreshToken 받지않음 -> 쿠키 저장 안됨
//2. 어떻게든 로컬에서 리프래시 토큰을 저장해야 한다면 첫 네이버로그인할 때 리프레시토큰을 같이 받아야함
//3. 403에러가 나오는데 reissue 할 떄 리프레시 토큰이 없어서 그런것으로 추정?
//4. 그외에도 다른 오류가 있을 수도 있음. 
//5. 지금은 Bearer undefined 값으로 나오는 문제,, 정말로 필요없으면 쿠키관련 코드 모두 제거
//6. accessToken 시간을 임의로 줄일수 있다면 줄이고 테스트 해보고 싶음.