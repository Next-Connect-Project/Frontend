import axios from "axios";

export const RequestNaverLogin = async (code: string) => {
  const url = `http://www.nextconnect.shop/api/auth/login/naver`;
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

export const RequestAccessToken = async (accessToken: string | null) => {
  const url = `http://www.nextconnect.shop/api/auth/reissue`;
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

export const RequestLogout = async () => {
  const url = `http://www.nextconnect.shop/api/auth/logout`;
  return await axios
    .get(url, {})
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log(e);
    });
};
