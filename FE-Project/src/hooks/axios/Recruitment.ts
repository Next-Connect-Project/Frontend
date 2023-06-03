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
    .get(url, { headers: { Authorization: token } })
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
    .patch(url, {}, { headers: { Authorization: token } })
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
    .delete(url, { headers: { Authorization: token } })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log(e);
    });
};

export const EditRecruitPost = async (
  id: string | undefined,
  token: string | null,
  category: string,
  title: string,
  deadline: Date | undefined,
  backNumber: number,
  frontNumber: number,
  designNumber: number,
  pmNumber: number,
  otherNumber: number,
  tech: string[],
  purpose: string,
  timeandplace: string,
  duration: string,
  way: string,
  progress: string,
  contact: string,
  free: string
) => {
  const url = `http://ec2-13-209-222-139.ap-northeast-2.compute.amazonaws.com:8080/api/recruit/update/${id}`;
  let ToIso = deadline?.toISOString();
  let deadlineToIso = ToIso?.substring(0, ToIso.length - 5);
  return await axios
    .put(
      url,
      {
        category: category,
        title: title,
        deadline: deadlineToIso,
        personnel: {
          backNumber: backNumber,
          frontNumber: frontNumber,
          designNumber: designNumber,
          pmNumber: pmNumber,
          otherNumber: otherNumber,
        },
        tech: tech,
        purpose: purpose,
        timeandplace: timeandplace,
        duration: duration,
        way: way,
        progress: progress,
        contact: contact,
        free: free,
      },
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
