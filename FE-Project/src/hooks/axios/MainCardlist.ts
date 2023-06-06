import axios from "axios";

export const getMainCardData = async () => {
  const url = `http://www.nextconnect.shop/api/recruit/main`;
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
  const url = `http://www.nextconnect.shop/api/promotion/resources/firstPage`;
  return await axios
    .get(url)
    .then((res) => {
      return res.data.response;
    })
    .catch((e) => {
      console.log(e);
    });
};
