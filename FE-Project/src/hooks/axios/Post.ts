import axios from "axios";

export const PostRecruitment = async (
  category: string,
  title: string,
  deadline: Date | undefined,
  backNumber: number,
  frontNumber: number,
  pmNumber: number,
  otherNumber: number,
  tech: string[],
  purpose: string,
  timeandplace: string,
  duration: string,
  way: string,
  progress: string,
  contact: string,
  free: string,
  token: string | null
) => {
  let deadlineToIso = deadline?.toISOString();
  return await axios
    .post(
      `http://ec2-13-124-65-139.ap-northeast-2.compute.amazonaws.com:8080//api/recruit/create`,
      {
        category: category,
        title: title,
        deadline: deadlineToIso,
        backNumber: backNumber,
        frontNumber: frontNumber,
        pmNumber: pmNumber,
        otherNumber: otherNumber,
        tech: tech,
        purpose: purpose,
        timeandplace: timeandplace,
        duration: duration,
        way: way,
        progress: progress,
        contact: contact,
        free: free,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => {
      return response;
    })
    .catch((e) => {
      return e.response;
    });
};

export const PostPromotion = async (
  title: string,
  content: string,
  abstractContent: string,
  token: string
) => {
  return await axios
    .post(
      `http://ec2-13-124-65-139.ap-northeast-2.compute.amazonaws.com:8080//api/promotion`,
      {
        title: title,
        content: content,
        abstractContent: abstractContent,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => {
      return response;
    })
    .catch((e) => {
      return e.response;
    });
};
