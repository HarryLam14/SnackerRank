import { useState } from "react";
import { useHistory } from "react-router-dom";
import { accountsAPI } from "../api/accounts";
import "../static/signin.css";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    accountsAPI.login(username, password).then(
      (res) => {
        if (res.status === 200) {
          history.goBack();
        }
      },
      (error) => console.log(error)
    );
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>
          Welcome Back, <br></br>Snacker
        </h1>
        <input
          type="text"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        ></input>
        <br></br>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        ></input>
        <br></br>
        <input className="loginButton" type="submit" value="Log in"></input>
      </form>
    </div>
  );
}

export default SignIn;
