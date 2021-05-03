const getSnacks = async (tag, params) => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  let url;
  if (tag) {
    url = `/api/snack/?tags=${tag}`;
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
};
