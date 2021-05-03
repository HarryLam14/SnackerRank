import { accountsAPI } from "./accounts";

const getTags = async () => {
  const request = {
    method: "GET",
  };

  return fetch("/api/tag/", request)
    .then((res) => res.json())
    .then((tags) => {
      return tags;
    })
    .catch((err) => console.log(err));
};

const addTag = async (tag) => {
  const request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...accountsAPI.tokenHeader(),
    },
    body: JSON.stringify({ ...tag }),
  };

  return fetch("/api/tag/", request)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const tagsAPI = {
  getTags,
  addTag,
};
