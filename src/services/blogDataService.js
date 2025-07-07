import axios from "axios";

axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.get["Content-Type"] = "application/json";

const blogApiService = axios.create({
  baseURL: "http://localhost:2727/",
});

const config = {
  headers: {
    "Access-Control-Allow-Origin": "http://localhost",
    "Access-Control-Allow-Methods": "GET,PUT",
  },
};

export const getBlogPosts = () => {
  return blogApiService
    .get("getblogposts")
    .then((response) => response.data)
    .catch((error) => console.log(error));
};
