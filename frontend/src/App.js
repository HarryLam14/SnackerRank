import { useState } from "react";
import { login, logout } from "./api/accounts";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  const userLogout = () => {
    logout();
  };

  return (
    <div>
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
