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

export const reviewsAPI = {
  getReviews,
};
