import { accountsAPI } from "./accounts";

const getSnacks = async (search, params) => {
  const requestOptions = {
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

  return fetch(url, requestOptions)
    .then(handleResponse)
    .then((data) => {
      return data;
    })
    .catch((err) => console.log(err));
};

const getSnack = async (id) => {
  const requestOptions = {
    method: "GET",
  };

  return fetch(`/api/snack/${id}/`, requestOptions)
    .then(handleResponse)
    .then((snack) => {
      return snack;
    });
};

const addSnack = async (snack) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...accountsAPI.tokenHeader(),
    },
    body: JSON.stringify({ ...snack }),
  };

  return fetch(`/api/snack/`, requestOptions).then(handleResponse);
};

const handleResponse = (response) => {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        console.log(response);
        return;
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
};

export const snacksAPI = {
  getSnacks,
  getSnack,
  addSnack,
};
