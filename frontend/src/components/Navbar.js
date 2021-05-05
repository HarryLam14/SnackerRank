import { Link } from "react-router-dom";
import { useState } from "react";
import image from "../images/logo.svg";
import "../static/navbar.css";

const Navbar = ({ loggedIn, userLogout }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav className="navBar">
      <div className="searchContainer">
        <Link to={`/search=${searchQuery}`}>
          <button>Search</button>
        </Link>
        <input
          type="text"
          placeholder="Search.."
          onChange={handleSearchChange}
          required
        />
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
