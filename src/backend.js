import axios from "axios";

export let POSTS = [];

axios.defaults.baseURL = `https://iqp8t.sse.codesandbox.io`;

export function createPost(data) {
  return axios({
    method: "POST",
    url: "/posts",
    data
  });
}

export function getPosts() {
  return axios({
    method: "GET",
    url: "/posts"
  });
}

export function getPost(id) {
  return axios({
    method: "GET",
    url: `/posts/${id}`
  });
}

export function putPost(id, data) {
  return axios({
    method: "PUT",
    url: `/posts/${id}`,
    data
  });
}

export function deletePost(id) {
  return axios({
    method: "DELETE",
    url: `/posts/${id}`
  });
}
