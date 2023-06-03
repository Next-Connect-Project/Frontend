import axios from "axios";

export const getMainCardData = async () => {
  const url = `http://ec2-13-209-222-139.ap-northeast-2.compute.amazonaws.com:8080/api/recruit/main`;
  return await axios
    .get(url)
    .then((res) => {
      return res.data.response.recruitments;
    })
    .catch((e) => {
      console.log(e);
    });
};

export const getMainPromotionCardData = async () => {
  const url = `http://ec2-13-209-222-139.ap-northeast-2.compute.amazonaws.com:8080/api/promotion/resources/firstPage`;
  return await axios
    .get(url)
    .then((res) => {
      return res.data.response;
    })
    .catch((e) => {
      console.log(e);
    });
};
