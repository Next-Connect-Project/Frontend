import axios from "axios";

// export const GetNaverToken = async (code: string) => {
//   const NAVER_CLIENT_ID = import.meta.env.VITE_NAVER_CLIENT_ID;
//   const NAVER_CLIENT_SECRET = import.meta.env.VITE_NAVER_CLIENT_SECRET;
//   const url = `/oauth2.0/token`;
//   return await axios
//     .get(url, {
//       params: {
//         grant_type: "authorization_code",
//         client_id: NAVER_CLIENT_ID,
//         client_secret: NAVER_CLIENT_SECRET,
//         code: code,
//         state: "test",
//       },
//       withCredentials: true,
//     })
//     .then((res) => {
//       return res;
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// };
export const RequestNaverLogin = async (code: string) => {
  const url = `http://ec2-13-124-65-139.ap-northeast-2.compute.amazonaws.com:8080/api/auth/login/naver`;
  return await axios
    .post(url, { code: code }, { withCredentials: true })
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log(e);
    });
};

export const requestAccessToken = async (accessToken: string, refreshToken: string) => {
  return await axios
    .post(
      `http://ec2-13-124-65-139.ap-northeast-2.compute.amazonaws.com:8080/api/auth/reissue`,
      {
        withCredentials: true,
        refresh: refreshToken
      },
      {
        headers: {
          Authorization: accessToken,
        },
      }
    )
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log(e);
    });
};