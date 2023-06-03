import axios from "axios";

export const getMyPostlist = async (token: string | null) => {
  const url =
    "http://ec2-13-209-222-139.ap-northeast-2.compute.amazonaws.com:8080/api/recruit/my";
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
