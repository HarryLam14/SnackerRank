import { accountsAPI } from "./accounts";

const getSnacks = async (search, params) => {
  const request = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  let url;
  if (search) {
    url = `/api/snack/?search=${search}`;
  } else {
    url = `/api/snack/?`;
  }

  if (params) {
    for (const [key, value] of Object.entries(params)) {
      url += `&${key}=${value}`;
    }
  }

  return fetch(url, request)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.log(err));
};

const getSnack = async (id) => {
  const request = {
    method: "GET",
  };

  return fetch(`/api/snack/${id}/`, request)
    .then((res) => res.json())
    .then((snack) => {
      return snack;
    })
    .catch((err) => console.log(err));
};

const addSnack = async (snack) => {
  const request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...accountsAPI.tokenHeader(),
    },
    body: JSON.stringify({ ...snack }),
  };

  return fetch(`/api/snack/`, request)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const snacksAPI = {
  getSnacks,
  getSnack,
  addSnack,
};
