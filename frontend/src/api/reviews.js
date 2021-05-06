import { accountsAPI } from "./accounts";

const getReviews = async (snack_id) => {
  const request = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  let url;
  if (snack_id) {
    url = `/api/review/?snack_id=${snack_id}`;
  } else {
    url = `/api/review/?`;
  }

  return fetch(url, request)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.log(err));
};

const addReview = async (review) => {
  const request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...accountsAPI.tokenHeader(),
    },
    body: JSON.stringify({ ...review }),
  };

  return fetch(`/api/review/`, request)
    .then((res) => {
      if (res.status===409) {
        return res;
      }
      res.json()
    })
    .catch((err) => console.log(err));
};

export const reviewsAPI = {
  getReviews,
  addReview,
};
