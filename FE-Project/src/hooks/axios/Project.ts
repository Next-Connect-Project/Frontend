import axios from "axios";

export const getDetailData = async () => {
  const url = "/dummy/Detail.json";
  return await axios
    .get(url)
    .then((response) => {
      console.log(response);
      return response.data.lists;
    })
    .catch((e) => {
        console.log(e);
    });
};
