import { useParams, Redirect } from "react-router-dom";
import SignIn from "./SignIn.js";

function LogInRouter({
  loggedIn,
  onSubmit,
  handleUsernameChange,
  handlePasswordChange,
}) {
  const prev_snack = useParams();

  if (prev_snack["id"] && loggedIn) {
    return <Redirect exact to={"/snack/" + prev_snack["id"]} />;
  } else if (loggedIn) {
    return <Redirect to="/" />;
  } else {
    return (
      <SignIn
        onSubmit={onSubmit}
        handleUsernameChange={handleUsernameChange}
        handlePasswordChange={handlePasswordChange}
      />
    );
  }
}
export default LogInRouter;
