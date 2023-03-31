import axios from "axios";

export const getMainCardData = async () => {
  const url = "/dummy/Projects.json";
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
