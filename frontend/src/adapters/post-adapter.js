import { fetchHandler, getPostOptions, getPatchOptions } from "../utils";

const baseUrl = "/api/posts";

export const createPost = async ({ caption, imageUrl }) =>
  fetchHandler(baseUrl, getPostOptions({ caption, imageUrl }));

export const getAllPosts = async () => {
  const [posts] = await fetchHandler(baseUrl);
  return posts || [];
};

export const getPost = async (id) => fetchHandler(`${baseUrl}/${id}`);

export const updatePost = async ({ caption, postId }) =>
  fetchHandler(`${baseUrl}/${postId}`, getPatchOptions({ caption }));