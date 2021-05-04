import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import _ from "lodash";
import { accountsAPI } from "../api/accounts";
import image from "../images/logo.svg";
import "../static/navbar.css";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (!_.isEmpty(accountsAPI.tokenHeader())) {
      setLoggedIn(true);
    }
  }, []);

  const userLogout = () => {
    accountsAPI.logout();
    setLoggedIn(false);
  };

  return (
    <nav className="navBar">
      <div className="searchContainer">
        <button>Search</button>
        <input type="text" />
      </div>
      <Link className="logoContainer" to="/">
        <img className="logo" src={image} alt="SnackerRank logo" />
      </Link>
      <div className="buttonsContainer">
        <Link to="/random">
          <p>Random</p>
        </Link>
        {!loggedIn ? (
          <>
            <Link to="/login">
              <p>Log in</p>
            </Link>
            <Link to="/sign-up">
              <p>Sign up</p>
            </Link>
          </>
        ) : (
          <>
            <Link to="/add-snack">
              <p>Add snack</p>
            </Link>
            <Link to="/">
              <button onClick={userLogout}>Sign out</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
