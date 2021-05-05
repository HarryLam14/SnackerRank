import "../static/signin.css";

function SignIn({ onSubmit, handleUsernameChange, handlePasswordChange }) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>
          Welcome Back, <br></br>Snacker
        </h1>
        <input
          type="text"
          name="username"
          onChange={handleUsernameChange}
          placeholder="Username"
        ></input>
        <br></br>
        <input
          type="password"
          name="password"
          onChange={handlePasswordChange}
          placeholder="Password"
        ></input>
        <br></br>
        <input className="loginButton" type="submit" value="Log in"></input>
      </form>
    </div>
  );
}

export default SignIn;
