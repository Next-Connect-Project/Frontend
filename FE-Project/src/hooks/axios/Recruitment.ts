import axios from "axios";

export const getRecruitmentCard = async (
  classification: string,
  state: string,
  page: number
) => {
  const url = `http://ec2-13-209-222-139.ap-northeast-2.compute.amazonaws.com:8080/api/recruit/search`;
  return await axios
    .get(url, {
      params: { category: classification, state: state, page: page },
    })
    .then((res) => {
      return res.data.response;
    })
    .catch((e) => {
      console.log(e);
    });
};

export const getRecruitmentData = async (
  id: string | undefined,
  token: string | null
) => {
  const url = `http://ec2-13-209-222-139.ap-northeast-2.compute.amazonaws.com:8080/api/recruit/detail/${id}`;
  return await axios
    .get(url, { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => {
      return res.data.response;
    })
    .catch((e) => {
      console.log(e);
    });
};

export const ChacngePostState = async (
  id: string | undefined,
  token: string | null
) => {
  const url = `http://ec2-13-209-222-139.ap-northeast-2.compute.amazonaws.com:8080/api/recruit/state/${id}`;
  return await axios
    .patch(url, {}, { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log(e);
    });
};

export const DeleteRecruitPost = async (
  id: string | undefined,
  token: string | null
) => {
  const url = `http://ec2-13-209-222-139.ap-northeast-2.compute.amazonaws.com:8080/api/recruit/delete/${id}`;
  return await axios
    .delete(url, { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log(e);
    });
};
