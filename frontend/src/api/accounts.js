const login = async (username, password) => {
  const request = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  };

  return fetch("/api/auth/login", request)
    .then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          const token = data["token"];
          localStorage.setItem("token", token);
        });
      }
      return res;
    })
    .catch((err) => console.log(err));
};

const logout = async () => {
  const request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  };

  return fetch("/api/auth/logout", request)
    .then((res) => {
      if (res.status === 204) {
        localStorage.removeItem("token");
      }
    })
    .catch((err) => console.log(err));
};

const register = async (username, password) => {
  const request = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  };

  return fetch("/api/auth/register", request)
    .then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          const token = data["token"];
          localStorage.setItem("token", token);
        });
      }
      return res;
    })
    .catch((err) => console.log(err));
};

const tokenHeader = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return { Authorization: `Token ${token}` };
  }
  return {};
};

export const accountsAPI = {
  login,
  logout,
  register,
  tokenHeader,
};
