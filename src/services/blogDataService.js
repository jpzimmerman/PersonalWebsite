import axios from "axios";

const blogApiService = axios.create({
  baseURL: "http://localhost:2727/",
});

axios.defaults.headers.patch["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.patch["Access-Control-Allow-Methods"] = "OPTIONS,PATCH";
axios.defaults.headers.patch["Content-Type"] = "application/json";

blogApiService.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
blogApiService.defaults.headers.get["Access-Control-Allow-Methods"] = "PATCH";
blogApiService.defaults.headers.get["Content-Type"] = "application/json";

blogApiService.defaults.headers.patch["Access-Control-Allow-Origin"] = "*";
blogApiService.defaults.headers.patch["Access-Control-Allow-Methods"] =
  "OPTIONS,PATCH";
blogApiService.defaults.headers.patch["Content-Type"] = "application/json";

export const getBlogPosts = () => {
  return blogApiService
    .get("getblogposts")
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const addLike = (postId) => {
  return blogApiService
    .patch(`blogPosts/${postId}/addLike`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};
