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
    if (!_.isEmpty(accountsAPI.authHeader())) {
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
    accountsAPI.login(username, password);
    setLoggedIn(true);
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
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Tags</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {snacks.map((snack) => (
            <tr key={snack.id}>
              <td>{snack.id}</td>
              <td>{snack.name}</td>
              <td>{snack.description}</td>
              <td>{snack.tags}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
