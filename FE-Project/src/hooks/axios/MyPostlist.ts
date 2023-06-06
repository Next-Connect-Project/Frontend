import axios from "axios";

export const getMyPostlist = async (token: string | null) => {
  const url = "http://www.nextconnect.shop/api/recruit/my";
  return await axios
    .get(url, { headers: { Authorization: token } })
    .then((res) => {
      console.log(res);
      return res.data.response;
    })
    .catch((e) => {
      console.log(e);
    });
};
