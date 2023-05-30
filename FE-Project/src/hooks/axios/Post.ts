import axios from "axios";

export const PostRecruitment = async (
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
  free: string,
  token: string | null
) => {
  let ToIso = deadline?.toISOString();
  let deadlineToIso = ToIso?.substring(0, ToIso.length - 5);
  return await axios
    .post(
      `http://ec2-13-209-222-139.ap-northeast-2.compute.amazonaws.com:8080/api/recruit/create`,
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
  token: string | null
) => {
  return await axios
    .post(
      `http://ec2-13-209-222-139.ap-northeast-2.compute.amazonaws.com:8080/api/promotion/register`,
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
