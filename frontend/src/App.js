// currently just testing in App.js,
// this code will be split into different components eventually
import { useState, useEffect } from "react";
import { accountsAPI } from "./api/accounts";
import { snacksAPI } from "./api/snacks";
import _ from "lodash";
import Header from "./layout/Header";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    if (!_.isEmpty(accountsAPI.tokenHeader())) {
      setLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    snacksAPI.getSnacks().then(
      (snacks) => {
        setSnacks(snacks);
      },
      (error) => console.log(error)
    );
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    accountsAPI.login(username, password).then(
      (res) => {
        if (res.status === 200) {
          setLoggedIn(true);
        }
      },
      (error) => console.log(error)
    );
    setUsername("");
    setPassword("");
  };

  const userLogout = () => {
    accountsAPI.logout();
    setLoggedIn(false);
  };

  return (
    <div>
      <Header loggedIn={loggedIn} />

      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
        ></input>
        <br></br>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        ></input>
        <br></br>
        <input type="submit" value="Login"></input>
      </form>

      <br></br>
      <button onClick={userLogout}>Logout</button>

    </div>
  );
}

export default App;
