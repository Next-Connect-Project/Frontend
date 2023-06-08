import axios from "axios";

export const getMyRecuritment = async (token: string | null) => {
  const url = "http://www.nextconnect.shop/api/recruit/my";
  return await axios
    .get(url, { headers: { Authorization: token } })
    .then((res) => {
      console.log("axios");
      console.log(res);
      return res.data.response;
    })
    .catch((e) => {
      console.log(e);
    });
};

// 수정 필요
export const getMyPromotion = async (token: string | null) => {
  const url = `http://www.nextconnect.shop/api/`;
  return await axios
    .get(url, { headers: { Authorization: token } })
    .then((res) => {
      return res.data.response;
    })
    .catch((e) => {
      console.log(e);
    });
};

export const getMyInfo = async (token: string | null) => {
  const url = `http://www.nextconnect.shop/api/auth/my`;
  return await axios
    .get(url, { headers: { Authorization: token } })
    .then((res) => {
      console.log("axios");
      console.log(res.data.response);
      return res.data.response;
    })
    .catch((e) => {
      console.log(e);
    });
};
