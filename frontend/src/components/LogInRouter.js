import { useParams, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import SignIn from "./SignIn.js";
import { accountsAPI } from "../api/accounts";

function LogInRouter ({ loggedIn, onSubmit }) {
    const prev_snack = useParams();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // const onClick = (e) => {
    //     e.preventDefault();
    //     setUsername("");
    //     setPassword("");
    //   };

      const handleUsernameChange = (e) => {
        setUsername(e.target.value);
      };
    
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };

    if (prev_snack["id"] && loggedIn) {
        return <Redirect exact to={"/snack/" + prev_snack["id"]} />
    } else if (loggedIn) {
        return <Redirect to="/" />
    } else {
        return <SignIn onSubmit={onSubmit}
        handleUsernameChange={handleUsernameChange}
        handlePasswordChange={handlePasswordChange}
        />
        }
}
export default LogInRouter;