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
        "Access-Control-Allow-Origin": "http://www.nextconnect.shop",
      },
      baseURL: "http://www.nextconnect.shop",
      withCredentials: true,
    })
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log(e);
    });
};

export const RegetAccessToken = async (
  accessToken: string | null,
  refreshToken: string | undefined
) => {
  const url = `http://www.nextconnect.shop/api/auth/reissue`;
  return await axios
    .post(
      url,
      { refreshToken: refreshToken },
      {
        headers: {
          Authorization: accessToken,
        },
        withCredentials: true,
      }
    )
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((e) => {
      return e;
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
