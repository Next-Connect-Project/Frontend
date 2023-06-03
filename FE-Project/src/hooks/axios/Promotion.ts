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

export const getPromotionData = async (
  id: string | undefined,
  token: string | null
) => {
  const url = `http://ec2-13-209-222-139.ap-northeast-2.compute.amazonaws.com:8080/api/promotion/detail/${id}`;
  return await axios
    .get(url, { headers: { Authorization: token } })
    .then((res) => {
      return res.data.response;
    })
    .catch((e) => {
      console.log(e);
    });
};

export const ChangeLikeStatus = async (
  id: string | undefined,
  token: string | null
) => {
  const url = `http://ec2-13-209-222-139.ap-northeast-2.compute.amazonaws.com:8080/api/promotion/like/${id}`;
  return await axios
    .post(url, {}, { headers: { Authorization: token } })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log(e);
    });
};

export const DeletePromotionPost = async (
  id: string | undefined,
  token: string | null
) => {
  const url = `http://ec2-13-209-222-139.ap-northeast-2.compute.amazonaws.com:8080/api/promotion/delete/${id}`;
  return await axios
    .delete(url, { headers: { Authorization: token } })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log(e);
    });
};

export const EditPromotionPost = async (
  id: string | undefined,
  token: string | null,
  title: string,
  content: string,
  abstractContent: string
) => {
  const url = `http://ec2-13-209-222-139.ap-northeast-2.compute.amazonaws.com:8080/api/promotion/update/${id}`;
  return await axios
    .put(
      url,
      { title: title, content: content, abstractContent: abstractContent },
      { headers: { Authorization: token } }
    )
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((e) => {
      console.log(e);
    });
};
