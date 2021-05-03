const getTags = async () => {
  const requestOptions = {
    method: "GET",
  };

  return fetch("/api/tag/", requestOptions)
    .then(handleResponse)
    .then((tags) => {
      return tags;
    });
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

export const tagsAPI = {
  getTags,
};
