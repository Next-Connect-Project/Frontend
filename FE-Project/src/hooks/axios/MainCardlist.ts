import axios from "axios";

export const getMainCardData = async () => {
  const url = `http://ec2-13-124-65-139.ap-northeast-2.compute.amazonaws.com:8080/api/recruit/main`;
  return await axios
    .get(url)
    .then((res) => {
      console.log(res);
      return res.data.response;
    })
    .catch((e) => {
        console.log(e);
    });
};

export const getMainPromotionCardData = async () => {
  const url = "/dummy/Promotion.json";
  return await axios
    .get(url)
    .then((response) => {
      // console.log(response);
      return response.data.lists;
    })
    .catch((e) => {
        console.log(e);
    });
};