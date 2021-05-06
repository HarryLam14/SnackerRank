import "../static/signin.css";

function SignUp({
  onSubmit,
  handleUsernameChange,
  handlePasswordChange,
  handleEmailChange,
}) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>
          Welcome, <br></br>Snacker
        </h1>
        <input
          type="text"
          name="username"
          onChange={handleUsernameChange}
          placeholder="Username"
        ></input>
        <br />
        <input
          type="text"
          name="email"
          onChange={handleEmailChange}
          placeholder="email@email.com"
        ></input>
        <br />
        <input
          type="password"
          name="password"
          onChange={handlePasswordChange}
          placeholder="Password"
        ></input>
        <br />
        <input className="loginButton" type="submit" value="Sign Up"></input>
      </form>
    </div>
  );
}

export default SignUp;
