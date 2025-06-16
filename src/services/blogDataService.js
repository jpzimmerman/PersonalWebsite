import axios from "axios";

const blogApiService = axios.create({
  baseURL: "https://localhost:3000",
});

const config = {
  headers: {
    "Access-Control-Allow-Origin": "https://localhost/",
    "Access-Control-Allow-Methods": "GET,PUT",
  },
};

export const getBlogPosts = async () => {
  return await blogApiService
    .get("getBlogPosts", config)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};
