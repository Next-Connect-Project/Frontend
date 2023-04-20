import axios from "axios";

export const GetNaverToken = async (code: string) => {
  const NAVER_CLIENT_ID = import.meta.env.VITE_NAVER_CLIENT_ID;
  const NAVER_CLIENT_SECRET = import.meta.env.VITE_NAVER_CLIENT_SECRET;
  const url = `/oauth2.0/token`;
  return await axios
    .get(url, {
      params: {
        grant_type: "authorization_code",
        client_id: NAVER_CLIENT_ID,
        client_secret: NAVER_CLIENT_SECRET,
        code: code,
        state: "test",
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
export const RequestNaverLogin = async (token: string) => {
  const url = `http://ec2-13-124-65-139.ap-northeast-2.compute.amazonaws.com:8080/api/auth/login/naver`;
  return await axios
    .post(url, { accessToken: token }, { withCredentials: true })
    .then((res) => {
      console.log(res);
      //리프레시 토큰은 쿠키로 저장 어세스토큰은 response로 반환후 로컬에서 redux로 저장
      //   setCookie(res.data.response.refreshToken, res.data.response.refreshExpiresIn)?
      return res.data;
    })
    .catch((e) => {
      console.log(e);
    });
};

export const requestAccessToken = async (accessToken: string) => {
  return await axios
    .post(
      `http://ec2-13-124-65-139.ap-northeast-2.compute.amazonaws.com:8080/api/auth/reissue`,
      {
        withCredentials: true,
        refresh: getCookie("refreshToken"),
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

const setCookie = (value: string, exp: Date) => {
  document.cookie = `refreshToken=Bearer ${value};expires=${exp.toUTCString}};path=/`;
};
// setCookie("expend", "true", 1);
const getCookie = (name: string) => {
  let cookie = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
  return cookie ? cookie[2] : null;
};
// getCookie(변수이름)
// var is_expend = getCookie("expend");
// console.log("쿠키 is_expend변수에 저장된 값: "+is_expend);

const deleteCookie = (name: string) => {
  document.cookie = name + `=; expires= Thu, 01 Jan 1999 00:00:10 GMT;`;
};
