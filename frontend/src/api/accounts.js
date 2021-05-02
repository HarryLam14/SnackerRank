export const login = async (username, password) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  };

  return fetch("/api/auth/login", requestOptions)
    .then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          const token = data["token"];
          localStorage.setItem("token", token);
        });
      }
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const logout = async () => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  };

  return fetch("/api/auth/logout", requestOptions)
    .then((res) => {
      if (res.status === 204) {
        localStorage.removeItem("token");
      }
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const register = async (username, password) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  };

  return fetch("/api/auth/register", requestOptions)
    .then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          const token = data["token"];
          localStorage.setItem("token", token);
        });
      }
      return res;
    })
    .catch((err) => {
      return err;
    });
};
