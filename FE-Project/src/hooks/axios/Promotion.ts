import axios from "axios";

export const getPromotionCard = async (
  page: number,
  limit: number,
  sorting: number
) => {
  const url = `http://ec2-13-209-222-139.ap-northeast-2.compute.amazonaws.com:8080/api/promotion/resources`;
  return await axios
    .get(url, {
      params: { page: page, limit: limit, sorting: sorting },
    })
      .then((res) => {
      return res.data.response;
    })
    .catch((e) => {
      console.log(e);
    });
};
