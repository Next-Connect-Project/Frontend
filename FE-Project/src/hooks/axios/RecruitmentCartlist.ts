import axios from "axios";

export const getRecruitmentCard = async () => {
  const url = "/dummy/Filter.json";
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
